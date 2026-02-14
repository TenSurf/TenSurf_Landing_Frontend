import React, { type Dispatch, type FC, type ReactNode, type SetStateAction, useState } from "react";
import GetEmailVerificationCode from "../GetEmailVerificationCode";
import Verification from "../Register/VerifyCodeStep";
import { Suspense } from "react";

interface IProps {
  setSignInSignUpComponentMode?: Dispatch<
    SetStateAction<"signIn" | "signUp" | "waitlist" | undefined>
  >;
  onModalClose?: () => void;
}

const SignInComponent: FC<IProps> = ({
  setSignInSignUpComponentMode,
  onModalClose,
}) => {
  const [email, setEmail] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(0);

  const step_content: Record<string, ReactNode> = {
    0: (
      <Suspense>
        <GetEmailVerificationCode
          setActiveStep={setActiveStep}
          setEmail={setEmail}
        />
      </Suspense>
    ),
    1: (
      <Verification
        setActiveStep={setActiveStep}
        email={email}
        onModalClose={onModalClose}
      />
    ),
  };

  return (
    <div className="flex flex-col gap-5 w-full">{step_content[activeStep]}</div>
  );
};

export default SignInComponent;
