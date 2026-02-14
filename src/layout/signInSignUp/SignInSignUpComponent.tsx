import { type FC } from "react";
import SignUpComponent from "../../component/auth/Register/SignUpComponent";
import { Button } from "@/components/ui/button";
import CloseIcon from "../../icons/CloseIcon";

interface IProps {
  initialMode?: "signIn" | "signUp" | "waitlist";
  isModal?: boolean;
  onModalClose?: () => void;
}

export const SignInSignUpComponent: FC<IProps> = ({
  isModal = false,
  onModalClose,
}) => {
  return (
    <div className="relative md:w-[32.5rem] flex flex-col items-center w-full gap-4 p-8 rounded-[32px] bg-[#02040E] border-[1px] border-[#343A40]">
      <div className="flex flex-col gap-10 w-full items-start">
        <div className="flex justify-between w-full items-center">
          <h5 className="text-3xl font-bold text-white">Welcome</h5>
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
          <SignUpComponent onModalClose={onModalClose} />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpComponent;
