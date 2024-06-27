import { type Dispatch, type SetStateAction } from 'react';

export default interface IGetEmailStepProps {
  email?: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setActiveStep: Dispatch<SetStateAction<number>>;
  isForgetPassword?: boolean;
}
