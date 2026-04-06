import { type Dispatch, type SetStateAction } from 'react';

export default interface IVerificationProps {
  setActiveStep: Dispatch<SetStateAction<number>>;
  email: string;
  onModalClose?: () => void;
}

export interface IVerifyCodeResponse {
  token: string;
  user_permissions: string[];
}
