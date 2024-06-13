import React, { type FC } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { backendUrl } from "../../helpers/http-request";
import { BackendUrls } from "../../helpers/backend-urls";
import { toast } from "sonner";
// import { useHubspotForm } from "next-hubspot";

export const ContactUs: FC = () => {
  // RHF ↓•↓•↓
  // const {
  //   control,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: "",
  //     name: "",
  //     text: "",
  //   },
  // });

  // const values = watch();
  // const handleFormSubmit = (submittedData: any) => {
  //   const email = submittedData?.email;
  //   const name = submittedData?.name;
  //   const text = submittedData?.text;
  //   axios({
  //     method: "post",
  //     url: backendUrl + BackendUrls.contact_us,
  //     data: {
  //       email,
  //       name,
  //       text,
  //     },
  //   })
  //     .then((response) => {
  //       toast.success(
  //         "Your message has been received. We will contact you soon."
  //       );
  //       reset();
  //     })
  //     .catch((e) => {
  //       toast.error(e?.response?.data?.detail as string);
  //     })
  //     .finally(() => {});
  // };

  // useHubspotForm({
  //   portalId: "46299069",
  //   formId: "be87769e-44ef-47c3-904e-171a6a124132",
  //   target: "#hubspot-form-wrapper",
  // });

  return <div id={"hubspot-form-wrapper"} className={"my-10"} />;
};

export default ContactUs;
