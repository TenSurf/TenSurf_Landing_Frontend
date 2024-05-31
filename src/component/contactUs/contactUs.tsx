import React, { type FC, useState } from 'react';
import TensurfInputText from '../general/inputText/tensurfInputText';
import MailIcon from '../../icons/MailIcon';
import UserIcon from '../../icons/UserIcon';
import TensurfButton from '../general/TensurfButton';
import EditIcon from '../../icons/EditIcon';
import SendIcon from '../../icons/SendIcon';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { backendUrl } from '../../helpers/http-request';
import { BackendUrls } from '../../helpers/backend-urls';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Script from "next/script";
import { useHubspotForm } from "next-hubspot";

export const ContactUs: FC = () => {
  const [isSendLoading, setIsSendLoading] = useState(false);
  // RHF ↓•↓•↓
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      text: ''
    }
  });

  const values = watch();
  const handleFormSubmit = (submittedData: any) => {
    setIsSendLoading(true);
    const email = submittedData?.email;
    const name = submittedData?.name;
    const text = submittedData?.text;
    axios({
      method: 'post',
      url: backendUrl + BackendUrls.contact_us,
      data: {
        email,
        name,
        text
      }
    })
      .then(response => {
        toast.success('Your message has been received. We will contact you soon.');
        setIsSendLoading(false);
        reset();
      })
      .catch(e => {
        toast.error(e?.response?.data?.detail as string);
        setIsSendLoading(false);
      })
      .finally(() => setIsSendLoading(false));
  };

  useHubspotForm({
    portalId: '46299069',
    formId: 'be87769e-44ef-47c3-904e-171a6a124132',
    target: '#hubspot-form-wrapper'
  })

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div id={"hubspot-form-wrapper"} className={'my-10'}/>
  );
};

export default ContactUs;