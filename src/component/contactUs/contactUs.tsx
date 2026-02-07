"use client"
import React, { type FC, useState } from "react";
import axios from "axios";
import { backendUrl } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";
import { toast } from "sonner";
import { Controller, useForm } from 'react-hook-form';
import { ArrowRight, User, Mail, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export const ContactUs: FC = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      text: "",
    },
  });

  const handleFormSubmit = (submittedData: any) => {
    setLoading(true);
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
        setShowSuccessModal(true);
        reset();
      })
      .catch(e => {
        const errorMsg = e?.response?.data?.detail || "Something went wrong. Please try again.";
        setErrorMessage(typeof errorMsg === 'string' ? errorMsg : JSON.stringify(errorMsg));
        setShowErrorModal(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-[#00041A] border border-[rgba(255,255,255,0.08)] text-center">
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-16 h-16 rounded-full bg-[rgba(34,197,94,0.15)] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#22C55E]" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-semibold text-[#F8F9FA] text-center">
                Message Sent!
              </DialogTitle>
              <DialogDescription className="text-[#ADB5BD] text-base mt-2 text-center">
                Thank you for reaching out. Our team will review your message and get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 bg-[#22C55E] hover:bg-[#22C55E]/80 text-white px-8 py-2 rounded-xl"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Error Modal */}
      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="sm:max-w-md bg-[#00041A] border border-[rgba(255,255,255,0.08)] text-center">
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-16 h-16 rounded-full bg-[rgba(239,68,68,0.15)] flex items-center justify-center">
              <XCircle className="w-8 h-8 text-[#EF4444]" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-semibold text-[#F8F9FA] text-center">
                Oops! Something went wrong
              </DialogTitle>
              <DialogDescription className="text-[#ADB5BD] text-base mt-2 text-center">
                {errorMessage || "We couldn't send your message. Please check your connection and try again."}
              </DialogDescription>
            </DialogHeader>
            <Button 
              onClick={() => setShowErrorModal(false)}
              className="mt-4 bg-[#082FDF] hover:bg-[#082FDF]/80 text-white px-8 py-2 rounded-xl"
            >
              Try Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className='py-20 w-full container my-12 lg:my-36'>
        <div className='flex flex-col lg:flex-row gap-16 md:gap-28 lg:gap-20 items-center px-2 lg:px-4'>
          {/* Left side - Title */}
          <div className="relative flex-1">
            <div
              style={{
                opacity: "0.4",
                background: "#082FDF",
                filter: "blur(120px)"
              }}
              className="hidden lg:block z-0 absolute inset-0 w-[200px] h-[200px] rounded-full -left-10"
            ></div>
            <h1 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-medium text-[#F8F9FA]">
              Get in Touch<br />
              <span className="text-[#ADB5BD]">with our Team</span>
            </h1>
            <p className="mt-6 text-[#6C757D] text-lg text-center lg:text-left">
              Have questions about TenSurf Brain? We're here to help.
            </p>
          </div>

          {/* Right side - Form */}
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-6 p-8 md:p-10 w-full lg:w-[55%] bg-[#00041A] border border-[rgba(255,255,255,0.08)] rounded-2xl"
          >
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6'>
              <div className="flex flex-col gap-2">
                <label className="text-white font-medium">Your Name</label>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <User className="w-5 h-5 text-[#6C757D]" />
                      </div>
                      <Input
                        {...field}
                        placeholder=''
                        className="w-full h-12 bg-[#01030B] border border-[rgba(255,255,255,0.08)] text-[#F8F9FA] placeholder:text-[#6C757D] pl-12 rounded-xl focus:border-[#082FDF] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  )}
                />
                {errors.name && (
                  <span className="text-[#EF4444] text-sm">{errors.name.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-medium">Email</label>
                <Controller
                  name='email'
                  control={control}
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address"
                    }
                  }}
                  render={({ field }) => (
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Mail className="w-5 h-5 text-[#6C757D]" />
                      </div>
                      <Input
                        {...field}
                        type="email"
                        placeholder=''
                        className="w-full h-12 bg-[#01030B] border border-[rgba(255,255,255,0.08)] text-[#F8F9FA] placeholder:text-[#6C757D] pl-12 rounded-xl focus:border-[#082FDF] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  )}
                />
                {errors.email && (
                  <span className="text-[#EF4444] text-sm">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">Message</label>
              <Controller
                name='text'
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    rows={6}
                    placeholder='Tell us how we can help...'
                    className="w-full bg-[#01030B] border border-[rgba(255,255,255,0.08)] text-[#F8F9FA] placeholder:text-[#6C757D] p-4 rounded-xl resize-none focus:border-[#082FDF] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                )}
              />
              {errors.text && (
                <span className="text-[#EF4444] text-sm">{errors.text.message}</span>
              )}
            </div>

            <Button 
              type='submit' 
              disabled={loading}
              className="flex gap-2 rounded-xl bg-[#082FDF] hover:bg-[#082FDF]/80 text-white py-6 px-8 self-end mt-2 shadow-[0_4px_20px_rgba(8,47,223,0.4)]"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <span className="font-medium">Send Message</span>
                  <ArrowRight size={20} strokeWidth={2} />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
