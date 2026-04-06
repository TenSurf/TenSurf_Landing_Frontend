import { Suspense } from "react";
import NewsletterVerifyContent from "./NewsletterVerifyContent";
import DefaultLayout from "@/layout/publicContentLayout/DefaultLayout";
import { Loader2 } from "lucide-react";

function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex flex-col items-center gap-6">
          <Loader2 className="w-16 h-16 text-[#082FDF] animate-spin" />
          <h1 className="text-2xl font-semibold text-[#F8F9FA]">
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
}

export default function NewsletterVerifyPage() {
  return (
    <DefaultLayout>
      <Suspense fallback={<LoadingFallback />}>
        <NewsletterVerifyContent />
      </Suspense>
    </DefaultLayout>
  );
}
