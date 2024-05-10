import React, { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import CircleArrowIcon from '../../../icons/CircleArrowIcon';
import { Divider } from '@mui/material';
import { Loader2, LucideTrash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChatStore } from '@/store/chat';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { HttpMethod, sendRequest } from '@/helpers/http-request';

interface IProps {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
  header?: ReactNode;
  footer?: ReactNode;
  hasHeaderDivider?: boolean;
  headerDividerClassNames?: string;
  toggleIconPosition?: 'left' | 'right';
  containerClassNamesAfterToggle?: string;
  children?: ReactNode;
  rightNode?: ReactNode;
}

export const TogglingColumn = ({
  isToggle,
  setIsToggle,
  header,
  footer,
  hasHeaderDivider = false,
  toggleIconPosition = 'left',
  children,
  containerClassNamesAfterToggle,
  headerDividerClassNames,
  rightNode
}: IProps) => {
  const { messages, loadMessages, chatLoading }: any = useChatStore();
  const [clearLoading, setClearLoading] = useState<boolean>();
  const [openClear, setOpenClear] = useState<boolean>();

  const clearHistoryChat = () => {
    setClearLoading(true);
    sendRequest('/chat/remove_all_message/', HttpMethod.GET)
      .then(() => {
        setOpenClear(false);
        setClearLoading(false);
        loadMessages([]);
      })
      .catch(() => {
        setClearLoading(false);
      });
  };
  return (
    <div
      className={`relative h-full transition-all pt-4 flex gap-1 rounded-r-lg ${
        isToggle ? containerClassNamesAfterToggle : rightNode ? 'w-[360px]' : 'w-[300px]'
      }  shadow-default2 shrink-0 bg-card `}
    >
      <div className='flex flex-col gap-4 w-full'>
        <div
          className={`w-full flex items-center ${
            isToggle ? 'flex-col px-1' : 'flex-row-reverse items-start justify-start px-4'
          } gap-4 cursor-pointer`}
        >
          <CircleArrowIcon
            className='transition-all text-primary'
            onClick={() => {
              setIsToggle((prev: any) => !prev);
            }}
          />

          {!isToggle && !!messages.length && (
            <Dialog open={openClear} modal={openClear} onOpenChange={e => setOpenClear(e)}>
              <DialogTrigger asChild>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  className='w-6 h-6 border rounded-full border-destructive'
                  disabled={chatLoading}
                  onClick={() => setOpenClear(true)}
                >
                  <LucideTrash2 className='text-destructive w-4' />
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Clear chat history</DialogTitle>
                  <DialogDescription>Are you sure to delete the whole chat history?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    onClick={clearHistoryChat}
                    className='bg-destructive hover:bg-destructive w-24'
                    disabled={clearLoading}
                  >
                    {clearLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Delete'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          {header && (
            <div
              onClick={() => {
                setIsToggle((prev: any) => !prev);
              }}
            >
              {header}
            </div>
          )}
        </div>

        {!isToggle && hasHeaderDivider ? (
          <div className={'px-4 ' + headerDividerClassNames || ''}>
            <Divider color='#F0F0F0' />
          </div>
        ) : null}

        {children && <div className='relative grow scrollable max-h-full overflow-auto px-2'>{children}</div>}
        {footer && <div> {footer}</div>}
      </div>

      {/* {rightNode && <div className='shrink-0 w-full'>{rightNode}</div>} */}
    </div>
  );
};
