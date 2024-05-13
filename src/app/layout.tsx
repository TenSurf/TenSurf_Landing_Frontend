import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TenSurf",
  description:
    'Revolutionizing AI Trading\n"At TenSurf, we are committed to revolutionizing AI trading and democratizing algorithmic trading. Our mission is to harness the power of Generative AI and Data Science to enable smart trading decisions."',
  icons: ["/favicon.ico", "/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <App />
          {children}
        </ThemeProvider>
        <Toaster duration={3000} />
      </body>
    </html>
  );
}

function App() {
  return (
    <div className="toastha">
      <ToastContainer />
    </div>
  );
}
