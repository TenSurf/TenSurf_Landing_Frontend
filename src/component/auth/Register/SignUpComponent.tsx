import { type FC, type ReactNode, useState } from "react";
import Verification from "./VerifyCodeStep";
import { RegisterForm } from "./Form";
import GetEmailVerificationCode from "../GetEmailVerificationCode";
import { Suspense } from "react";

interface IProps {
  onModalClose?: () => void;
}
const SignUpComponent: FC<IProps> = ({ onModalClose }) => {
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
    1: <Verification setActiveStep={setActiveStep} email={email} />,
    2: (
      <RegisterForm setActiveStep={setActiveStep} onModalClose={onModalClose} />
    ),
  };

  return (
    <div className="flex flex-col gap-5 w-full">{step_content[activeStep]}</div>
  );
};

export default SignUpComponent;
