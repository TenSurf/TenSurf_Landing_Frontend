"use client";

import { useState } from "react";
import Link from "next/link";
import PageProvider from "@/component/general/PageProvider";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";

const TBLSAI_API = process.env.NEXT_PUBLIC_TBLSAI_API_URL || "";

type Step = "email" | "verify" | "success";

const WaitlistPage = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${TBLSAI_API}/api/v1/waitlist/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Something went wrong. Please try again.");
        return;
      }
      if (data.message?.includes("already on the waitlist")) {
        setStep("success");
      } else {
        setStep("verify");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${TBLSAI_API}/api/v1/waitlist/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), code: code.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Invalid code. Please try again.");
        return;
      }
      setStep("success");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${TBLSAI_API}/api/v1/waitlist/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      });
      if (res.ok) {
        setError("");
        setCode("");
      }
    } catch {
      setError("Failed to resend code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageProvider title="Join the Waitlist - TenSurf">
      <DefaultLayout>
        <div className="min-h-screen flex flex-col items-center justify-start pt-24 pb-16 px-4">
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#082FDF] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#B0C4FF]">Launching Soon</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Automate Your Trading<br />Without Writing a Single Line of Code
            </h1>
            <p className="text-lg text-[#ADB5BD] leading-relaxed">
              TenSurf transforms your plain English trading ideas into fully automated
              NinjaTrader strategies. Join the waitlist to get early access when we launch.
            </p>
          </div>

          {/* Card */}
          <div className="w-full max-w-md">
            <div className="bg-[#00041A] border border-[#1a1a2e] rounded-2xl p-8 shadow-2xl">
              {step === "email" && (
                <>
                  <h2 className="text-xl font-semibold text-white text-center mb-2">
                    Join the Waitlist
                  </h2>
                  <p className="text-sm text-[#ADB5BD] text-center mb-6">
                    Enter your email to reserve your spot. We&apos;ll send a verification code.
                  </p>
                  <form onSubmit={handleJoin} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 bg-[#0a1744] border border-[#1a2744] rounded-lg text-white placeholder-[#6C757D] focus:outline-none focus:border-[#082FDF] focus:ring-1 focus:ring-[#082FDF] transition-colors"
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-400 text-center">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-[#082FDF] hover:bg-[#0620B0] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Get Early Access"}
                    </button>
                  </form>
                </>
              )}

              {step === "verify" && (
                <>
                  <h2 className="text-xl font-semibold text-white text-center mb-2">
                    Verify Your Email
                  </h2>
                  <p className="text-sm text-[#ADB5BD] text-center mb-1">
                    We sent a 6-digit code to
                  </p>
                  <p className="text-sm text-white text-center font-medium mb-6">
                    {email}
                  </p>
                  <form onSubmit={handleVerify} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        placeholder="000000"
                        maxLength={6}
                        required
                        className="w-full px-4 py-3 bg-[#0a1744] border border-[#1a2744] rounded-lg text-white text-center text-2xl tracking-[0.5em] font-mono placeholder-[#6C757D] focus:outline-none focus:border-[#082FDF] focus:ring-1 focus:ring-[#082FDF] transition-colors"
                      />
                    </div>
                    <p className="text-xs text-[#6C757D] text-center">
                      Code expires in 2 minutes
                    </p>
                    {error && (
                      <p className="text-sm text-red-400 text-center">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading || code.length !== 6}
                      className="w-full py-3 bg-[#082FDF] hover:bg-[#0620B0] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Verifying..." : "Verify & Join"}
                    </button>
                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={() => { setStep("email"); setCode(""); setError(""); }}
                        className="text-sm text-[#ADB5BD] hover:text-white transition-colors"
                      >
                        Change email
                      </button>
                      <button
                        type="button"
                        onClick={handleResend}
                        disabled={loading}
                        className="text-sm text-[#B07FFF] hover:text-white transition-colors disabled:opacity-50"
                      >
                        Resend code
                      </button>
                    </div>
                  </form>
                </>
              )}

              {step === "success" && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#0a1744] rounded-full flex items-center justify-center border-2 border-[#2a2a3e]">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2">
                    You&apos;re on the list!
                  </h2>
                  <p className="text-sm text-[#ADB5BD] mb-6">
                    Thanks for joining. We&apos;ll notify you at <span className="text-white font-medium">{email}</span> as soon as TenSurf is ready.
                  </p>
                  <Link
                    href="/"
                    className="inline-block px-6 py-2.5 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-lg text-white hover:bg-[#082FDF]/30 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Features preview */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-center text-lg font-semibold text-white mb-8">
              What you&apos;ll get with TenSurf
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#00041A]/50 border border-[#1a1a2e] rounded-xl">
                <div className="text-3xl mb-3">&#9889;</div>
                <h4 className="text-white font-medium mb-1">Strategy Surf</h4>
                <p className="text-sm text-[#ADB5BD]">
                  Describe your strategy in plain English and get working NinjaScript code instantly.
                </p>
              </div>
              <div className="text-center p-6 bg-[#00041A]/50 border border-[#1a1a2e] rounded-xl">
                <div className="text-3xl mb-3">&#128200;</div>
                <h4 className="text-white font-medium mb-1">Indicator Surf</h4>
                <p className="text-sm text-[#ADB5BD]">
                  Create custom NinjaTrader indicators from a simple description.
                </p>
              </div>
              <div className="text-center p-6 bg-[#00041A]/50 border border-[#1a1a2e] rounded-xl">
                <div className="text-3xl mb-3">&#128736;</div>
                <h4 className="text-white font-medium mb-1">NinjaScript Surf</h4>
                <p className="text-sm text-[#ADB5BD]">
                  Modify existing NinjaScript code using natural language prompts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </PageProvider>
  );
};

export default WaitlistPage;
