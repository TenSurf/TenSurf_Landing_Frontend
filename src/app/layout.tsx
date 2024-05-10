import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import {ToastContainer} from 'react-toastify';
import {Toaster} from '@/components/ui/sonner';
import {GoogleOAuthProvider} from "@react-oauth/google";
import {MsalProvider} from "@azure/msal-react"
import {MsalInstance} from "@/lib/AzureConfig";
import MsalClientProvider from "@/contexts/MsalClientProvider";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Tensurf Hub',
    description:
        'Revolutionizing AI Trading\n"At TenSurf, we are committed to revolutionizing AI trading and democratizing algorithmic trading. Our mission is to harness the power of Generative AI and Data Science to enable smart trading decisions."',
    icons: ['/favicon.ico', '/logo.png']
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
        <GoogleOAuthProvider clientId={'494005247609-sp9inbdgeikkc51027en625t3ar4ki6a.apps.googleusercontent.com'}>
            <MsalClientProvider>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
                    <App/>
                    {children}
                </ThemeProvider>
                <Toaster duration={3000}/>
            </MsalClientProvider>
        </GoogleOAuthProvider>
        </body>
        </html>
    );
}

function App() {
    return (
        <div className='toastha'>
            <ToastContainer/>
        </div>
    );
}
