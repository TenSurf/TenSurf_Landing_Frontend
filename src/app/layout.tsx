import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import Head from "next/head";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { cookies } from "next/headers";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { token_name } from "@/helpers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TenSurf",
  description: `Experience the future of trading with TenSurf Hub, where our cutting-edge "TenSurf Brain" AI chat interface delivers real-time market analysis and insights directly to you. Integrate your trading strategy with our intuitive, no-code platform that makes algorithmic trading accessible to everyone.`,
  icons: ["/favicon.ico", "/logo.png"],
  keywords: [
    "algorithm trading",
    "algorithms trading",
    "trading algorithms",
    "ai trade",
    "ai trader",
    "ai algorithm trading",
    "trade with ai",
    "trade",
    "finance",
  ],
  openGraph: {
    type: "website",
    url: "https://tensurf.ai",
    title: "Tensurf",
    description: "Your advanced AI-powered Trading platform",
    siteName: "Tensurf Hub",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALIYTICS}`}
        ></Script>
        <Script
          id={"google-tag-manager"}
          strategy={"afterInteractive"}
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALIYTICS}');`,
          }}
        ></Script>
        <Script
          id={"hotjar"}
          strategy={"afterInteractive"}
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:4985901,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        ></Script>
        <Script
          id={"mouseflow"}
          strategy={"afterInteractive"}
          dangerouslySetInnerHTML={{
            __html: `window._mfq = window._mfq || [];
                (function() {
                  var mf = document.createElement("script");
                  mf.type = "text/javascript"; mf.defer = true;
                  mf.src = "//cdn.mouseflow.com/projects/9bc15f72-9b4a-4ee7-b0a1-84ce917ca48f.js";
                  document.getElementsByTagName("head")[0].appendChild(mf);
                  })();`,
          }}
        ></Script>
      </head>
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
          <App />
          {children}
          <Toaster duration={3000} />
          <Script
            id={"hs-script-loader"}
            async
            defer
            src={"//js.hs-scripts.com/46299069.js"}
            type={"text/javascript"}
          ></Script>
          <script async type="text/javascript" src="/js/scroll.js"></script>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

function App() {
  const cookieStore = cookies();

  sendRequest(
    "/account/check_authentication/",
    HttpMethod.GET,
    {},
    false,
    cookieStore.get(token_name)?.value
  ).catch((err) => {
    if (err.response?.data) {
      if (err.response.status === 401) {
        window.location.replace("/signin");
        cookieStore.delete(token_name);
      }
    }
  });

  return (
    <div className="toastha">
      <ToastContainer />
    </div>
  );
}
