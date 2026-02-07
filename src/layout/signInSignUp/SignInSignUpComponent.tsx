import { type FC, useState } from "react";
import SignInComponent from "../../component/auth/Login/SignInComponent";
import SignUpComponent from "../../component/auth/Register/SignUpComponent";
import { Button } from "@/components/ui/button";
import CloseIcon from "../../icons/CloseIcon";
import WaitList from "@/component/auth/Register/WaitList";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constatns/general.constants";

interface IProps {
  initialMode: "signIn" | "signUp" | "waitlist";
  isModal?: boolean;
  onModalClose?: () => void;
}

export const SignInSignUpComponent: FC<IProps> = ({
  isModal = false,
  initialMode = "signIn",
  onModalClose,
}) => {
  const [mode, setMode] = useState<
    "signIn" | "signUp" | "waitlist" | undefined
  >(initialMode);
  const [isJoin, setIsJoin] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="relative md:w-[32.5rem] flex flex-col items-center w-full gap-4 p-8 rounded-[32px] bg-[#02040E] border-[1px] border-[#343A40]">
      <div className="flex flex-col gap-10 w-full items-start">
        <div className="flex justify-between w-full items-center">
          {(!isJoin || mode !== "waitlist") && (
            <h5 className={"text-3xl font-bold text-white"}>
              {mode === "signIn"
                ? "Sign In"
                : mode === "signUp"
                  ? "Sign up"
                  : mode === "waitlist" && "Join Waitlist"}
            </h5>
          )}
          {isModal ? (
            <div className="cursor-pointer">
              <Button
                onClick={onModalClose}
                variant="text"
                className="text-white"
              >
                <CloseIcon />
              </Button>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-center w-full">
          {mode === "signIn" ? (
            <SignInComponent
              setSignInSignUpComponentMode={setMode}
              onModalClose={onModalClose}
            />
          ) : mode === "signUp" ? (
            <SignUpComponent onModalClose={onModalClose} />
          ) : (
            mode === "waitlist" && (
              <WaitList setIsJoin={setIsJoin} isJoin={isJoin} />
            )
          )}
        </div>
      </div>
      {mode === "signIn" ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-1 text-white text-[12px]">
            <div>{"Don't have an account?"}</div>
            <Button
              onClick={() => router.push(ROUTE.signUp)}
              variant="text"
              size="sm"
              className="text-[#3861fb] hover:underline"
            >
              Sign Up
            </Button>
          </div>
        </div>
      ) : null}

      {mode === "signUp" ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center flex-col md:flex-row gap-1 text-white text-xs">
            <div>Have an Account?</div>
            <Button
              onClick={() => router.push(ROUTE.signIn)}
              variant="text"
              size="sm"
              className="text-white underline !p-1"
            >
              Log In Here
            </Button>
          </div>
        </div>
      ) : null}

      {mode === "waitlist" && !isJoin ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center flex-col md:flex-row gap-1 text-white text-xs">
            <div>Have an Account?</div>
            <Button
              onClick={() => router.push(ROUTE.signIn)}
              variant="text"
              size="sm"
              className="text-[#3861fb]"
            >
              Log In Here
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SignInSignUpComponent;
