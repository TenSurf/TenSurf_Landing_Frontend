import { PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon } from 'lucide-react';
import React, { use, useRef, useState } from 'react';
import { Slider } from '@/components/ui/slider';

export const ChatAudio = (props: { src: string; autoPlay: boolean }) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [audioPlay, setAudioPlay] = useState<boolean>(props.autoPlay);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const [displayAudioDuration, setDisplayAudioDuration] = useState<number>(0);
  const [seekSliderMax, setSeekSliderMax] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const loadMetaData = () => {
    setDisplayAudioDuration(audio.current?.duration || 0);
    setSeekSliderMax(audio.current?.duration || 0);
  };

  const timeUpdate = () => {
    setCurrentTime(audio.current?.currentTime || 0);
  };

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const togglePlay = () => {
    console.log(audio);

    setAudioPlay((prev: boolean) => {
      console.log(prev);

      if (prev) {
        audio.current?.pause();
      } else {
        audio.current?.play();
      }
      return !prev;
    });
  };

  const toggleMuted = () => {
    setAudioMuted((prev: boolean) => !prev);
  };

  return (
    <div id='audio-player-container' className='relative my-2'>
      <div className='flex flex-row items-center gap-2'>
        <audio
          ref={audio}
          src={props.src}
          autoPlay={props.autoPlay}
          preload='metadata'
          onTimeUpdate={timeUpdate}
          onLoadedMetadata={loadMetaData}
          onEnded={() => setAudioPlay(false)}
          muted={audioMuted}
        ></audio>
        <button onClick={() => togglePlay()}>{audioPlay ? <PauseIcon /> : <PlayIcon />}</button>
        <span>{calculateTime(currentTime)}</span>
        <Slider
          step={0.1}
          min={0}
          max={seekSliderMax}
          value={[currentTime]}
          onValueChange={e => {
            setCurrentTime(e[0]);
            if (audio.current) {
              audio.current.currentTime = e[0];
            }
          }}
        ></Slider>
        <span>{calculateTime(displayAudioDuration)}</span>
        <button onClick={toggleMuted}>{audioMuted ? <VolumeXIcon></VolumeXIcon> : <Volume2Icon></Volume2Icon>}</button>
      </div>
    </div>
  );
};
