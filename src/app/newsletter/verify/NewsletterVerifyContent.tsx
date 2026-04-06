"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsletterVerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [status, setStatus] = useState<"loading" | "success" | "error" | "already_verified">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link. No token provided.");
      return;
    }

    // Call the verification API
    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `https://tensurf.ai/api/newsletter/verify/?token=${token}`
        );
        const data = await response.json();
        
        if (response.ok && data.verified) {
          if (data.detail?.includes("already verified")) {
            setStatus("already_verified");
          } else {
            setStatus("success");
          }
          setMessage(data.detail);
        } else {
          setStatus("error");
          setMessage(data.detail || "Verification failed. Please try again.");
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred. Please try again later.");
      }
    };

    verifyEmail();
  }, [token]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="max-w-md w-full text-center">
          <div className="flex flex-col items-center gap-6">
            <Loader2 className="w-16 h-16 text-[#082FDF] animate-spin" />
            <h1 className="text-2xl font-semibold text-[#F8F9FA]">
              Verifying your email...
            </h1>
            <p className="text-[#ADB5BD]">
              Please wait while we confirm your subscription.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="max-w-md w-full text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-3xl font-semibold text-[#F8F9FA]">
              You&apos;re Subscribed!
            </h1>
            <p className="text-[#ADB5BD] text-lg">
              {message}
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-[#6C757D] text-sm">
                You&apos;ll now receive updates about TenSurf Brain, trading strategies, and exclusive offers.
              </p>
              <Link href="/">
                <Button className="rounded-3xl py-6 px-8 bg-[#082FDF] hover:bg-[#082FDF]/80">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "already_verified") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="max-w-md w-full text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-blue-500" />
            </div>
            <h1 className="text-3xl font-semibold text-[#F8F9FA]">
              Already Verified
            </h1>
            <p className="text-[#ADB5BD] text-lg">
              {message}
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-[#6C757D] text-sm">
                You&apos;re already subscribed to the TenSurf newsletter.
              </p>
              <Link href="/">
                <Button className="rounded-3xl py-6 px-8 bg-[#082FDF] hover:bg-[#082FDF]/80">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-semibold text-[#F8F9FA]">
            Verification Failed
          </h1>
          <p className="text-[#ADB5BD] text-lg">
            {message}
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-[#6C757D] text-sm">
              The verification link may have expired or is invalid. Please try subscribing again.
            </p>
            <Link href="/">
              <Button className="rounded-3xl py-6 px-8 bg-[#082FDF] hover:bg-[#082FDF]/80">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
