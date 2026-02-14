import type {Metadata} from 'next';
import {Inter, Space_Grotesk} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/sonner';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {cookies} from 'next/headers';
import {HttpMethod, sendRequest} from '@/helpers/http-request';
import {token_name} from '@/helpers/auth';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({subsets: ['latin']});
const spaceGrotesk = Space_Grotesk({subsets: ['latin'], variable: '--font-space-grotesk', weight: ['500', '700']});

export const metadata: Metadata = {
	metadataBase: new URL('https://tensurf.ai'),
	title: 'TenSurf',
	description: `Turn your trading ideas into automated NinjaScript strategies using plain English. TenSurf Brain generates, compiles, and validates your code inside NinjaTrader—no coding required.`,
	icons: ['/favicon.ico'],
	keywords: [
		'ninjatrader strategy builder',
		'no code trading',
		'ai trading strategy',
		'ninjascript generator',
		'automated trading',
		'algorithmic trading',
		'trading bot builder',
		'plain english trading',
		'tensurf brain'
	],
	openGraph: {
		type: 'website',
		url: 'https://tensurf.ai',
		title: 'TenSurf Brain - AI Strategy Builder for NinjaTrader',
		description: 'Turn plain English trading rules into working NinjaScript code. No coding required.',
		siteName: 'TenSurf Brain',
		images: [
			{
				url: '/tensurf.png'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TenSurf Brain - AI Strategy Builder',
		description: 'Plain English to NinjaScript in minutes. No coding required.',
		images: ['/tensurf.png']
	}
};

export default function RootLayout({
	                                   children
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<head>
			<meta name="impact-site-verification" value="6533ef63-80cd-4424-96fb-92bf1881373e" />

			{/* Google Analytics 4 */}
			{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
						`}
					</Script>
				</>
			)}
		</head>
		<body className={`${inter.className} ${spaceGrotesk.variable}`}>
		{process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string ? (
			<GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
				<App/>
				{children}
				<CookieConsent />
				<Toaster duration={3000}/>
				<script async type="text/javascript" src="/js/scroll.js" />
			</GoogleOAuthProvider>
		) : (
			<div>
			Google client id not set
			</div>
		)}
		</body>
		</html>
	);
}

async function App() {
	const cookieStore = await cookies();
	
	sendRequest(
		'/account/check_authentication/',
		HttpMethod.GET,
		{},
		false,
		cookieStore.get(token_name)?.value
	).catch((err) => {
		if (err.response?.data) {
			if (err.response.status === 401) {
				cookieStore.delete(token_name);
			}
		}
	});
	
	return null;
}
