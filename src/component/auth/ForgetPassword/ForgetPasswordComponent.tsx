import {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";

import ResetPassword from "./ResetPassword";
import GetEmailVerificationCode from "../GetEmailVerificationCode";

interface IProps {
  setSignInSignUpComponentMode?: Dispatch<
    SetStateAction<
      "signIn" | "signUp" | "forgetPassword" | "waitlist" | undefined
    >
  >;
}
const ForgetPasswordComponent: FC<IProps> = ({
  setSignInSignUpComponentMode,
}) => {
  const [email, setEmail] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(1);

  const step_content: Record<string, ReactNode> = {
    0: (
      <GetEmailVerificationCode
        setActiveStep={setActiveStep}
        setEmail={setEmail}
        isForgetPassword={true}
      />
    ),
    1: (
      <ResetPassword
        setActiveStep={setActiveStep}
        email={email}
        setSignInSignUpComponentMode={setSignInSignUpComponentMode}
      />
    ),
  };

  return (
    <div className="flex flex-col w-full">{step_content[activeStep]}</div>
  );
};

export default ForgetPasswordComponent;
