import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HttpMethod, sendRequest } from '@/helpers/http-request';
import { useChatStore } from '@/store/chat';
import { FileIcon, Loader2, MicIcon, PaperclipIcon, Pause, Send, XIcon } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { ChatLevelState, useChatLevelStore } from '@/store/chat_level';
import { ChartState, useChartStore } from '@/store/chart';
import { timestampToISOString } from '@/utils/functions';
import { ChatAudio } from '@/components/tag/audio';

const VoiceChatbot = dynamic(() => import('../../Chat/VoiceChat'), {
  ssr: false
});

export const Chatbot = () => {
  const chatContent = useRef<HTMLDivElement>(null);
  const [initChatbotLoading, setInitChatbotLoading] = useState<boolean>(false);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>('');
  const { messages, loadMessages, addMessage, chatLoading, setChatLoading }: any = useChatStore();
  const { initChatSRSegment, updateChatSRVisible }: ChatLevelState = useChatLevelStore();
  const { candlestickSeries, chart, symbol }: ChartState = useChartStore();
  const [is_play, set_is_play] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<any>();
  const [chatMessage, setChatMessage] = useState<string>('');
  const [voiceTimer, setVoiceTimer] = useState<number>(60);
  const [timerId, setTimerId] = useState<any>();

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatContent.current) {
        chatContent.current.scrollTop = chatContent.current.scrollHeight;
      }
    }, 100);
  };

  const toggleVoice = async (is_cancel: boolean) => {
    try {
      if (is_play) {
        if (is_cancel) mediaRecorder.onstop = undefined;
        clearInterval(timerId);
        mediaRecorder?.stop();
        set_is_play(false);
      } else {
        let recordedChunks: any[] = [];
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const localMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(localMediaRecorder);

        localMediaRecorder.ondataavailable = (event: any) => {
          recordedChunks.push(event.data);
        };

        localMediaRecorder.onstop = () => {
          const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });

          scrollToBottom();
          setUploadLoading(true);
          const formData = new FormData();
          const audioFile = new File([audioBlob], 'recording.wav', { type: 'audio/wav' });

          formData.append('file', audioFile);
          // formData.append('message', '');
          sendRequest('/chat/start_chat/', HttpMethod.POST, formData, true)
            .then((res: any) => {
              addMessage(res.data);
              setChatLoading(true);
              setUploadLoading(false);
              scrollToBottom();
              if (chatRef.current) {
                chatRef.current.value = '';
                chatRef.current.style.height = 'auto';
                setChatMessage('');
                removeFile();
              }
              const candlestick_data = candlestickSeries.data();

              sendRequest('/chat/result_chat/', HttpMethod.POST, {
                file: res.data.file,
                message: res.data.message,
                symbol: symbol,
                start_datetime: timestampToISOString(candlestickSeries.dataByIndex(0).time),
                end_datetime: timestampToISOString(candlestickSeries.dataByIndex(candlestick_data.length - 1).time),
                timezone: new Date().getTimezoneOffset()
              })
                .then((result_ai: any) => {
                  addMessage({ ...result_ai.data, autoPlay: true });
                  scrollToBottom();
                  setChatLoading(false);

                  if (result_ai.data.levels) {
                    initChatSRSegment(candlestickSeries, result_ai.data.levels, chart?.timeScale().getVisibleRange());

                    chart?.timeScale().subscribeVisibleTimeRangeChange((timeRange: any) => {
                      updateChatSRVisible(timeRange?.from, timeRange?.to);
                    });
                  }
                })
                .catch(() => {
                  setChatLoading(false);
                });
            })
            .catch(() => {
              setUploadLoading(false);
            });
          set_is_play(false);
        };
        localMediaRecorder.start();

        setVoiceTimer(60);
        setTimerId(
          setInterval(() => {
            setVoiceTimer(prev => {
              if (prev <= 0) toggleVoice(false);
              else return prev - 1;
              return 0;
            });
          }, 1000)
        );

        set_is_play(true);
      }
    } catch (err) {
      console.error('Error starting recording: ', err);
      set_is_play(false);
    }
  };

  const chatRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInitChatbotLoading(true);
    sendRequest('/chat/all_message/', HttpMethod.GET)
      .then((res: any) => {
        setInitChatbotLoading(false);
        loadMessages(res.data.chats);
        scrollToBottom();
      })
      .catch(() => {
        setInitChatbotLoading(false);
      });

    const textAreaChat: HTMLElement | null = document.getElementById('chat-message-input');
    if (!textAreaChat) return;

    const autoHeightFunction = function () {
      textAreaChat.style.height = 'auto';
      textAreaChat.style.maxHeight = '100px';
      textAreaChat.style.height = textAreaChat.scrollHeight + 'px';
    };

    textAreaChat.addEventListener('input', autoHeightFunction);

    const submitTextArea = (event: any) => {
      if (!chatRef.current) return;
      if (event.ctrlKey && event.key === 'Enter') {
        chatRef.current.value += '\n';
        autoHeightFunction();
      } else if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();
      }
    };

    textAreaChat.addEventListener('keydown', submitTextArea);

    return () => {
      textAreaChat.removeEventListener('input', autoHeightFunction);
      textAreaChat.removeEventListener('keydown', submitTextArea);
    };
  }, []);

  const sendMessage = () => {
    if ((chatRef.current && chatRef.current.value && chatRef.current.value.trim()) || inputRef.current?.files?.length) {
      scrollToBottom();
      setUploadLoading(true);
      const formData = new FormData();
      if (inputRef.current?.files?.length) {
        formData.append('file', inputRef.current?.files[0]);
      }
      if (chatRef.current) {
        formData.append('message', chatRef.current.value);
      }
      sendRequest('/chat/start_chat/', HttpMethod.POST, formData, !!inputRef.current?.files?.length)
        .then((res: any) => {
          addMessage(res.data);
          setChatLoading(true);
          setUploadLoading(false);
          scrollToBottom();
          if (chatRef.current) {
            chatRef.current.value = '';
            chatRef.current.style.height = 'auto';
            setChatMessage('');
            removeFile();
          }
          const candlestick_data = candlestickSeries.data();

          sendRequest('/chat/result_chat/', HttpMethod.POST, {
            file: res.data.file,
            message: res.data.message,
            symbol: symbol,
            start_datetime: timestampToISOString(candlestickSeries.dataByIndex(0).time),
            end_datetime: timestampToISOString(candlestickSeries.dataByIndex(candlestick_data.length - 1).time),
            timezone: new Date().getTimezoneOffset()
          })
            .then((result_ai: any) => {
              addMessage(result_ai.data);
              scrollToBottom();
              setChatLoading(false);

              if (result_ai.data.levels) {
                initChatSRSegment(candlestickSeries, result_ai.data.levels, chart?.timeScale().getVisibleRange());

                chart?.timeScale().subscribeVisibleTimeRangeChange((timeRange: any) => {
                  updateChatSRVisible(timeRange?.from, timeRange?.to);
                });
              }
            })
            .catch(() => {
              setChatLoading(false);
            });
        })
        .catch(() => {
          setUploadLoading(false);
        });
    }
  };

  const loadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFilename(e.target.files[0].name);
    }
  };

  const removeFile = () => {
    setFilename('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Card className='w-full h-full flex flex-col'>
      <CardContent
        ref={chatContent}
        className='flex flex-col grow w-full h-full overflow-auto px-2 gap-3 scroll-smooth overflow-x-hidden'
      >
        {initChatbotLoading ? (
          <Loader2 className='mx-auto my-auto h-6 w-6 animate-spin' />
        ) : !!messages.length ? (
          messages.map((item: any, index: number) => (
            <div key={index}>
              <Card
                className={`p-2 text-sm w-3/4 transition-all ${
                  item.role === 1 ? 'items-end ml-auto bg-muted' : 'border'
                }`}
              >
                {!!item.file && ['.jpg', '.jpeg', '.png'].find(format => item.file.endsWith(format)) && (
                  <Image
                    src={`${window.location.port ? `http://${window.location.hostname}:9000` : window.origin}/chatbot/${
                      item.file
                    }?image=filename`}
                    unoptimized
                    alt='chatbot'
                    className='w-full h-auto mb-2'
                    width={100}
                    height={100}
                  />
                )}
                {!!item.file && ['.mp4', '.wav'].find(format => item.file.endsWith(format)) && (
                  <ChatAudio
                    src={`${window.location.port ? `http://${window.location.hostname}:9000` : window.origin}/chatbot/${
                      item.file
                    }?audio=filename`}
                    autoPlay={item.autoPlay}
                  ></ChatAudio>
                )}
                <p className='whitespace-pre-line'>{item.message}</p>
                {!!item.file && !['.jpg', '.jpeg', '.png', '.mp4', '.wav'].find(format => item.file.endsWith(format)) && (
                  <span className='mt-2'>
                    <a
                      target='_blank'
                      className='text-[10px] text-primary no-underline hover:underline'
                      href={`${
                        window.location.port ? `http://${window.location.hostname}:9000` : window.origin
                      }/chatbot/${item.file}`}
                    >
                      {item.file.split('/')[1]}
                    </a>
                  </span>
                )}
              </Card>
            </div>
          ))
        ) : (
          <span className='flex items-center justify-center h-full text-gray-200 font-black text-3xl'>
            Tensurf Brain
          </span>
        )}
        {chatLoading && <Image src={'/images/chatbot-loading.gif'} width={48} height={48} alt='loading' />}
        {/* <VoiceChatbot></VoiceChatbot> */}
      </CardContent>
      <div>
        {filename && (
          <Card>
            <CardContent className='text-xs ring-2 rounded-lg mb-3 p-3 w-full flex justify-between items-center'>
              <div className='flex items-center'>
                <FileIcon className='w-4 h-4' />
                <span className='mx-2'>{filename}</span>
              </div>
              <Button variant={'outline'} className='rounded-full w-6 h-6' size={'icon'} onClick={removeFile}>
                <XIcon className='w-4 h-4 mt-0' />
              </Button>
            </CardContent>
          </Card>
        )}
        <div className='flex gap-1 items-end'>
          <div className='grow me-1'>
            <Textarea
              onChange={e => setChatMessage(e.target.value)}
              id='chat-message-input'
              disabled={chatLoading || is_play}
              required
              placeholder={is_play ? '00:' + voiceTimer.toString().padStart(2, '0') : 'Message...'}
              ref={chatRef}
              className='text-sm'
              rows={1}
            />
          </div>

          <Button
            variant={'ghost'}
            size={'icon'}
            onClick={() => (is_play ? toggleVoice(true) : inputRef.current?.click())}
            className='w-8 h-8'
          >
            {uploadLoading ? (
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            ) : is_play ? (
              <XIcon className='w-4 h-4' />
            ) : (
              <PaperclipIcon className='w-6 p-1 text-gray-700' />
            )}
          </Button>
          <Input
            onChange={loadFile}
            ref={inputRef}
            type='file'
            className='hidden'
            accept='.jpg, .jpeg, .png, .gif, .bmp, .tiff, .pdf, .txt, .docx, .pptx, .ppt, .mp3, .wav, .csv, .xlsx'
          />

          <Button
            size='icon'
            className={`w-8 h-8 bg-teal-500 hover:bg-teal-500 ${is_play && 'bg-destructive hover:bg-destructive'} ${
              (!!chatMessage.length || inputRef.current?.files?.length) && 'bg-primary hover:bg-primary'
            }`}
            onClick={e =>
              inputRef.current?.files?.length || chatRef.current?.value?.length ? sendMessage() : toggleVoice(false)
            }
            disabled={chatLoading || uploadLoading || initChatbotLoading}
          >
            {inputRef.current?.files?.length || chatMessage.length ? (
              <Send className='w-4 h-4' />
            ) : is_play ? (
              // <div className='w-4 h-4 bg-white rounded'></div>
              <Pause className='w-4 h-4' />
            ) : (
              <MicIcon className='w-4 h-4' />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};
