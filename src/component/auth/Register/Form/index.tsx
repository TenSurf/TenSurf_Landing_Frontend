import axios from "axios";
import { getCookie, setCookie } from "@/helpers/auth";
import { BackendUrls } from "@/helpers/backend-urls";
import { backendUrl } from "@/helpers/http-request";
import React, {
  type Dispatch,
  type FC,
  type SetStateAction,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import TensurfInputText from "../../../general/inputText/tensurfInputText";
import { Button } from "@/components/ui/button";
import UserIcon from "../../../../icons/UserIcon";
import { ROUTE } from "../../../../constatns/general.constants";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AccountState, useAccountStore } from "@/store/account";

interface IProps {
  setActiveStep?: Dispatch<SetStateAction<number>>;
  onModalClose?: () => void;
}

export const RegisterForm: FC<IProps> = ({ setActiveStep, onModalClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const { update_waitlist }: AccountState = useAccountStore();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "",
    },
    mode: "onChange",
  });

  const handleFormSubmit = (submittedData: any) => {
    setIsLoading(true);
    const full_name = submittedData?.full_name;
    axios({
      method: "post",
      url: backendUrl + BackendUrls.register_form,
      data: {
        full_name,
        token: getCookie(),
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.data.token) {
          setCookie(response?.data?.token as string);
          router.replace(ROUTE.plans);
        } else {
          toast.info(response.data.detail);
          update_waitlist(true);
          router.replace(ROUTE.waitlist);
        }
        if (onModalClose) {
          onModalClose();
        }
      })
      .catch((e) => {
        toast.error(e?.response?.data?.detail as string);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      <Controller
        name="full_name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TensurfInputText
            {...field}
            name="Full Name"
            customClassName={{ container: "w-full" }}
            placeholder="Enter your Full Name "
            label="Full Name"
            leftItem={<UserIcon className="w-6 h-6" />}
            hasError={errors?.full_name?.type === "required" && true}
          />
        )}
      />

      <div className="flex items-start">
        <input
          id="link-checkbox"
          type="checkbox"
          checked={terms}
          onChange={(event) => setTerms(event.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-white dark:text-gray-300"
        >
          I have read and agreed with the{" "}
          <a
            href={ROUTE.termsOfUse}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Terms Of Use
          </a>
          ,{" "}
          <a
            href={ROUTE.privacyPolicy}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>
          ,{" "}
          <a
            href={ROUTE.refundPolicy}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Refund Policy
          </a>
          {" "}and{" "}
          <a
            href={ROUTE.riskDisclosure}
            target={"_blank"}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Risk Disclosure
          </a>
          .
        </label>
      </div>
      <Button
        disabled={!terms}
        type="submit"
        loading={isLoading}
        size="xl"
        className="w-full bg-[#3861fb] hover:bg-[#3861fb]/90 text-white disabled:bg-gray-700"
      >
        Register
      </Button>
      <Button
        type="button"
        onClick={() => {
          if (setActiveStep) {
            setActiveStep(0);
          }
        }}
        variant="text"
        size="sm"
        className="m-auto text-[#3861fb]"
      >
        ← Insert email again to resend code
      </Button>
    </form>
  );
};
