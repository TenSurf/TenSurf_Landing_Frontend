import { type Dispatch, type SetStateAction } from 'react';

export default interface ITimerProps {
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
}
