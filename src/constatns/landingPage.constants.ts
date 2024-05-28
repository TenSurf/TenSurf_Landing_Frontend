import LevelSurfFlatIcon from '../icons/LevelSurfFlatIcon';
import TrendSurfFlatIcon from '../icons/TrendSurfFlatIcon';
import VolumeSurfFlatIcon from '../icons/VolumeSurfFlatIcon';
import LiqSurfFlatIcon from '../icons/LiqSurfFlatIcon';
import RiskSurfFlatIcon from '../icons/RiskSurfFlatIcon';
import StatSurfFlatIcon from '../icons/StatSurfFlatIcon';
import PairSurfFlatIcon from '../icons/PairSurfFlatIcon';
import WaveSurfFlatIcon from '../icons/WaveSurfFlatIcon';
import GapSurfFlatIcon from '../icons/GapSurfFlatIcon';
import AiRiskIllustration from '../illistrations/AiRiskIllustration';
import TradeGptIllustration from '../illistrations/TradeGptIllustration';
import TradingIntegrationIllustration from '../illistrations/TradingIntegrationIllustration';
import LayerIcon from '../icons/LayerIcon';
import FaqIcon from '../icons/FaqIcon';
import ShoppingBagIcon from '../icons/ShoppingBagIcon';
import UserGroupIcon from '../icons/UserGroupIcon';
import PhoneIcon from '../icons/PhoneIcon';
import KeivanEbrahimiImgSrc from '../../public/images/team/KeivanEbrahimi.png';
import MeysamAzadManjiriImgSrc from '../../public/images/team/MeysamAzadManjiri.png';
import AaronKorbsImgSrc from '../../public/images/team/AaronKorbs.png';
import PouyaAsadiImgSrc from '../../public/images/team/PouyaAsadi.png';
import AliSadeghpourImgSrc from '../../public/images/team/AliSadeghpour.jpg';
import ZahraMoradiImgSrc from '../../public/images/team/ZahraMoradi.png';
import NargesMirehiImgSrc from '../../public/images/team/NargesMirehi.png';
import HassanAhariImgSrc from '../../public/images/team/HassanAhari.jpg';
import AhmadrezashahmohamadiImgSrc from '../../public/images/team/Ahmadrezashahmohamadi.png';
import YoutubeIcon from '../icons/YoutubeIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import {ROUTE, TENSURF_CONTACT} from './general.constants';
import XIcon from '../icons/XIcon';
import AboutUsIcon from "@/icons/AboutUsIcon";

export enum MnuItemsEnum {
    products = 'Products',
    services = 'Services',
    chart = 'Chart',
    plans = 'Plans',
    team = 'Team',
    contact = 'Contact us',
    faq = 'Faq',
    aboutUs = 'About us',
}

export const MENU_ITEMS = [
    {title: MnuItemsEnum.services, icon: LayerIcon},
    {title: MnuItemsEnum.plans, icon: ShoppingBagIcon},
    {title: MnuItemsEnum.team, icon: UserGroupIcon},
    {title: MnuItemsEnum.contact, icon: PhoneIcon},
    {title: MnuItemsEnum.aboutUs, icon: AboutUsIcon},
    {title: MnuItemsEnum.faq, icon: FaqIcon},
];

export const HERO_SECTION = {
    title: 'Your advanced AI-powered platform',
    description: `"At TenSurf, we are committed to revolutionizing AI trading and democratizing algorithmic trading. Our mission is to harness the power of Generative AI and Data Science to enable smart trading decisions."`,
    items: [
        "Advanced Analytics",
        "Risk Management",
        "Effortless Automation",
        "Predictive Analysis",
        "Strategy Assistance",
        "Automation",
        "Saving traders time",
    ],

    description2: `Sign up for our free trial today and discover the power of TenSurf for yourself!`,
};

export const MVP_SECTION = {
    title: 'Services',
    items: [
        {
            title: 'Al-powered Trading Assistant',
            description: '(TenSurf Brain): Analyze markets, manage risk, and get personalized coaching - all powered by Al.'
        },
        {
            title: 'Automated Analysis & Routines',
            description: 'Streamline your pre-market preparation with a TenSurf Brain that adapts and optimizes your daily routines.'
        },
        {
            title: 'Advanced Chart Insights',
            description: 'Ask questions, identify patterns, and gain insights directly on the charts.'
        },
        {
            title: 'Actionable Market Predictions',
            description: 'Stay ahead of the curve with Al that predicts price movements and breakouts.'
        },
        {
            title: 'Strategy Builder & Tester',
            description: 'Develop and test trading strategies with ease using natural language prompts.'
        },
        {
            title: 'Intelligent Widgets',
            description: 'Gain a deeper understanding of the market with real-time insights on trends, risk, liquidity, and more.'
        },
        // {
        //     title: 'Automate',
        //     description: 'Focuses on automation and saving traders time'
        // },
    ]
};

export const OFFERING_SECTION = {
    title: 'Tools',
    description:
        'A comprehensive range of tools for real-time market analysis, trend detection, liquidity tracking, risk management, statistical analysis, and more.',
    items: [
        {
            title: 'LevelSurf',
            description:
                'Provides real-time visualization and alerts for major support and resistance and other key market levels, aiding traders in identifying critical market thresholds.',
            icon: LevelSurfFlatIcon
        },
        {
            title: 'TrendSurf',
            description:
                'Analyzes and detecting overall market trends across various time frames, helping traders align with the big picture of market movements.',
            icon: TrendSurfFlatIcon
        },
        {
            title: 'VolumeSurf',
            description:
                'Analyzes and detecting overall market trends across various time frames, helping traders align with the big picture of market movements.',
            icon: VolumeSurfFlatIcon
        },
        {
            title: 'LiqSurf',
            description:
                'Tracks major liquidity levels and changes, equipped with spoof detection technology, to inform traders about potential market movements and liquidity shifts..',
            icon: LiqSurfFlatIcon
        },
        {
            title: 'RiskSurf',
            description:
                'A comprehensive risk management tool that alerts traders to key levels for scaling out or exiting positions, helping in effective risk mitigation.',
            icon: RiskSurfFlatIcon
        },
        {
            title: 'StatSurf',
            description:
                'Utilizes statistical analysis to provide insights into market patterns and anomalies, enabling traders to make data-driven decisions.',
            icon: StatSurfFlatIcon
        },
        {
            title: 'PairSurf',
            description: 'Providing analytics for identifying and capitalizing on market correlations and divergences.',
            icon: PairSurfFlatIcon
        },
        {
            title: 'WaveSurf',
            description:
                'Analyzes market wave patterns and cycles, assisting traders in identifying potential trend reversals and momentum shifts.',
            icon: WaveSurfFlatIcon
        },
        {
            title: 'GapSurf',
            description:
                'Focuses on identifying and analyzing price gaps in the market, providing traders with actionable insights on potential trading opportunities arising from these gaps.',
            icon: GapSurfFlatIcon
        }
    ]
};

export const CHART_SECTION = {
    title: 'Will be released soon',
    description: 'An upcoming user interface upgrade for enhanced trading experience.'
};

export const INNOVATIONS_SECTION = {
    title: 'Planned Innovations',
    items: [
        {
            title: 'Trading Platform Integration',
            description: 'Seamless integration with major trading platforms for streamlined operations.',
            illustration: TradingIntegrationIllustration
        },
        {
            title: 'TradeGPT',
            description: "Advanced Large Language Models that can analyze market data and even act on the trader's behalf.",
            illustration: TradeGptIllustration
        },
        {
            title: 'AI Risk Manager',
            description: 'An AI-driven tool for sophisticated risk analysis and management.',
            illustration: AiRiskIllustration
        }
    ]
};

export const ABOUT_US_SECTION = {
    title: 'About us',
    description: "Explore TenSurf Brain and Unleash Your Trading Potential",
    items: [
        {
            title: 'Born from Passion, Driven by Innovation',
            description: 'TenSurf was founded by a team of industry veterans and technology enthusiasts with a shared vision (empower traders of all levels with the tools and insights needed to thrive in today markets).',
        },
        {
            title: 'TenSurf Brain: Your AI Advantage',
            description: "We built a cutting-edge trading platform powered by TenSurf Brain, a suite of AI, ML, and data science tools. This translates to sophisticated analytics, robust risk management, and personalized assistance – all designed to elevate your trading experience.",
        },
        {
            title: 'Democratizing Trading',
            description: 'We believe powerful trading tools shouldn be a privilege for the few. TenSurf mission is to level the playing field, providing everyone with the resources they need to succeed.',
        }
    ]
};

export const TEAM_SECTION = {
    title: 'Meet the Team',
    leaders: [
        {
            name: 'Keivan Ebrahimi',
            description: 'Founder and CEO',
            imgSrc: KeivanEbrahimiImgSrc,
            linkedIn: 'https://www.linkedin.com/in/keivanebrahimi/'
        },
        {
            name: 'Meysam Azad-Manjiri',
            description: 'Co-founder and CTO',
            imgSrc: MeysamAzadManjiriImgSrc,
            linkedIn: 'https://www.linkedin.com/in/meisam-azad-manjiri'
        },
        {
            name: 'Aaron Korbs',
            description: 'Co-founder CMO',
            imgSrc: AaronKorbsImgSrc,
            linkedIn: 'https://www.linkedin.com/company/korbstrading'
        },
        {
            name: 'Pouya Asadi',
            description: 'Chief Product Officer',
            imgSrc: PouyaAsadiImgSrc,
            linkedIn: 'https://www.linkedin.com/in/pouya-asadi-0a456033/'
        }
    ],
    persons: [
        {
            name: 'Ali Sadeghpour',
            description: 'Algorithmic Trader',
            imgSrc: AliSadeghpourImgSrc,
            linkedIn: 'https://www.linkedin.com/in/ali-sadeghpoor'
        },
        {
            name: 'Zahra Moradi',
            description: 'Human Resources',
            imgSrc: ZahraMoradiImgSrc,
            linkedIn: 'https://www.linkedin.com/in/zahra-moradi-6351681ab/'
        },
        {
            name: 'Narges Mirehi',
            description: 'Data Scientist',
            imgSrc: NargesMirehiImgSrc,
            linkedIn: 'https://www.linkedin.com/in/narges-mirehi-b2b5b0a8'
        },
        {
            name: 'Hassan Ahari',
            description: 'Full Stack Developer',
            imgSrc: HassanAhariImgSrc,
            linkedIn: 'https://www.linkedin.com/in/hassan-ahari/'
        },
        {
            name: 'Ahmad Shahmohammadi',
            description: 'UI-UX Designer',
            imgSrc: AhmadrezashahmohamadiImgSrc,
            linkedIn: 'https://www.linkedin.com/in/ahmadreza-shahmohammadi'
        }
    ]
};

export const FAQ_SECTION = {
    title: 'FREQUENTLY ASKED QUESTIONS',
    description: "Sign up for our free trial today and discover the power of TenSurf for yourself!",
    items: [
        {
            question: '1. What is TenSurf?',
            answer: '- TenSurf is an innovative trading platform designed to empower both retail traders and professional firms with advanced tools and insights. Our platform leverages cutting-edge AI, ML, and Data Science technologies to streamline trading processes and enhance decision-making.',
        },
        {
            question: '2. Who can benefit from TenSurf?',
            answer: '- TenSurf caters to a diverse range of users, including individual retail traders looking to improve their trading performance and professional trading firms seeking advanced analytics and risk management solutions.',
        },
        {
            question: '3. What sets TenSurf apart from other trading platforms?',
            answer: '- TenSurf stands out for its sophisticated AI-powered features, including TenSurf Brain, which offers advanced analytics, risk management, personalized assistance, and automation capabilities. Our platform is designed to empower traders with actionable insights and streamline their trading experience.',
        },
        {
            question: '4. How does TenSurf Brain work?',
            answer: '- TenSurf Brain is the core engine of our platform, utilizing advanced AI algorithms to analyze market dynamics, provide instant performance feedback, automate routine tasks, and assist with strategy development. It leverages natural language processing to understand user queries and respond with actionable insights.',
        },
        {
            question: '5. Is TenSurf suitable for beginners?',
            answer: '- Absolutely! TenSurf is designed to be user-friendly and accessible to traders of all levels. Our platform offers personalized assistance, educational resources, and intuitive tools to help beginners navigate the complexities of trading with confidence.',
        },
        {
            question: '6. Can I customize my trading experience with TenSurf?',
            answer: '- Yes, definitely! TenSurf offers customization options to tailor your trading experience to your unique preferences and trading style. Whether you prefer automated strategies, personalized alerts, or specific analytical tools, TenSurf provides the flexibility to meet your needs.',
        },
        {
            question: '7. Is my data safe with TenSurf?',
            answer: '- At TenSurf, we prioritize the security and privacy of our users\' data. We employ robust encryption protocols and adhere to strict data security standards to ensure your information remains safe and confidential.',
        },
        {
            question: '8. How can I get started with TenSurf?',
            answer: '- Getting started with TenSurf is quick and easy! Simply sign up for an account on our website, and you\'ll gain access to our platform\'s powerful features and tools. Our user-friendly interface and comprehensive tutorials will guide you through the setup process and help you get up and running in no time.',
        },
        {
            question: '9. Does TenSurf offer customer support?',
            answer: '- Yes, TenSurf provides dedicated customer support to assist you with any questions or issues you may encounter. Our team is available to provide timely assistance and ensure you have a seamless experience while using our platform.',
        },
        {
            question: '10. Can I try TenSurf before committing to a subscription?',
            answer: '- Absolutely! TenSurf offers a free trial period for new users to explore our platform and experience its features firsthand.',
        },
    ]
};

export const FOOTER_MENU_COLS = [
    {
        title: 'Connect with Us',
        items: [
            {
                title: 'LinkedIn',
                icon: LinkedInIcon,
                path: TENSURF_CONTACT.linkedin
            },
            {
                title: 'X(Twitter)',
                icon: XIcon,
                path: TENSURF_CONTACT.twitter
            },
            {
                title: 'Youtube',
                icon: YoutubeIcon,
                path: TENSURF_CONTACT.youtube
            }
        ]
    },
    {
        title: 'Quick Links',
        items: [
            {
                title: 'Home',
                icon: '',
                path: ROUTE.home
            },
            {
                title: 'Products',
                icon: '',
                path: ROUTE.landingProducts
            },
            {
                title: 'Plans',
                icon: '',
                path: ROUTE.plans
            },
            {
                title: 'Team',
                icon: '',
                path: ROUTE.team
            },
            {
                title: 'Contact Us',
                icon: '',
                path: ROUTE.contactUs
            },
            {
                title: 'About Us',
                icon: '',
                path: ROUTE.aboutUs
            },
            {
                title: 'Blog',
                icon: '',
                path: ROUTE.blog
            }
        ]
    },
    {
        title: 'Resources',
        items: [
            {
                title: 'FAQ',
                icon: '',
                path: ROUTE.faq
            },
            {
                title: 'Terms Of Use',
                icon: '',
                path: ROUTE.termsOfUse
            },

            {
                title: 'Privacy Policy',
                icon: '',
                path: ROUTE.privacyPolicy
            },
            {
                title: 'Refund Policy',
                icon: '',
                path: ROUTE.refundPolicy
            },
            {
                title: 'Risk Disclosure',
                icon: '',
                path: ROUTE.riskDisclosure
            }
        ]
    }
];

export const COPYRIGHT = `© ${new Date().getFullYear()} TenSurf LLC. All rights reserved.`;
