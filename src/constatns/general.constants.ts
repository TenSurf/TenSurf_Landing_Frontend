export const TENSURF_CONTACT = {
  phone: '650-770-6476',
  phoneCallLink: 'tel:+16507706476',
  mail: 'support@tensurf.ai',
  mailToLink: 'mailto:support@tensurf.ai',
  facebook: '#',
  linkedin: 'https://www.linkedin.com/company/tensurf/',
  twitter: 'https://twitter.com/TenSurf_Algo',
  youtube: 'https://www.youtube.com/channel/UC9ieaTLEY75vW_4wGR4hqdg'
};

export const ROUTE = {
  home: '/',
  landing: '/',
  landingProducts: '/#Productss',
  landingChart: '/#Chart',
  landingPlans: '/#Planss',
  landingTeam: '/#Teams',
  contactUs: '/contact-us',
  aboutUs: '/about-us',
  faq: '/faq',
  support: '#',
  privacyPolicy: '/privacy-policy',
  refundPolicy: '/refund-policy',
  riskDisclosure: '/risk-disclosure',
  termsOfUse: '/terms-of-use',
  blog: '/blog',
  dashboard: '/dashboard',
  profile: '/profile',
  profileSetting: '/profile?mode=profileSetting',
  profileBilling: '/profile?mode=billing',
  chart: '/chart',
  signIn: '/signin',
  signUp: '/signup',
  signOut: '/logout',
  plans: '/plans',
  comming: '/comming-soon'
};

export const NOTIFICATION = {
  newsLetter: {
    successMessage: 'Your email has been registered.',
    errorMessage: 'Email already exists'
  }
};

export const PAGE_TITLE = {
  home: 'Tensurf Hub - Revolutionizing AI Trading',
  aboutUs: 'Our Journey | Tensurf',
  contactUs: 'Contact Us | Tensurf',
  blog: 'blog | Tensurf',
  faq: 'FAQ | Tensurf',
  termsOfUse: 'Terms of Use | Tensurf',
  privacyPolicy: 'Privacy Policy | Tensurf',
  refundPolicy: 'Refund Policy | Tensurf',
  riskDisclosure: 'Risk Disclosure | Tensurf',
  dashboard: 'Dashboard | Tensurf',
  chart: 'Chart | Tensurf',
  profile: 'Profile Setting | Tensurf',
  commingSoon: 'Comming Soon'
};

export const CHART_MENU_ALL = {
  label: 'All',
  items: [{ label: 'All Levels' }]
};

export const CHART_MENU_SR = {
  label: 'S/R',
  items: [
    {
      label: 'Weekly'
    },
    {
      label: 'Daily'
    },
    {
      label: 'Hourly'
    },
    {
      label: '5-min'
    }
  ]
};

export const CHART_MENU_VWAP = {
  label: 'VWAP',
  items: [
    {
      label: 'Daily VWAP',
      items: [
        {
          label: 'Top band 1 of VWAP STD'
        },
        {
          label: 'Top band 2 of VWAP STD'
        },
        {
          label: 'Top band 3 of VWAP STD'
        },
        {
          label: 'Bottom band 1 of VWAP STD'
        },
        {
          label: 'Bottom band 2 of VWAP STD'
        },
        {
          label: 'Bottom band 3 of VWAP STD'
        },
        {
          label: 'Bottom band 4 of VWAP STD'
        }
      ]
    },
    {
      label: 'Weekly VWAP',
      items: [
        {
          label: 'Top band 1 of VWAP STD'
        },
        {
          label: 'Top band 2 of VWAP STD'
        },
        {
          label: 'Top band 3 of VWAP STD'
        },
        {
          label: 'Bottom band 1 of VWAP STD'
        },
        {
          label: 'Bottom band 2 of VWAP STD'
        },
        {
          label: 'Bottom band 3 of VWAP STD'
        },
        {
          label: 'Bottom band 4 of VWAP STD'
        }
      ]
    }
  ]
};

export const CHART_MENU_IMBALANCE = {
  label: 'Imbalance',
  items: [
    {
      label: 'Bid/Ask volume delta imbalance'
    },
    {
      label: 'Footprint imbalance'
    }
  ]
};

export const CHART_MENU_MC = {
  label: 'MC',
  items: [
    {
      label: 'VAL/VAH of balance days micro-composite volume profile'
    },
    {
      label: 'POC of balance days micro-composite volume profile'
    }
  ]
};

export const CHART_MENU_VP = {
  label: 'VP',
  items: [
    {
      label: 'VAL/VAH of previous session volume profile'
    },
    {
      label: 'POC of previous session volume profile'
    }
  ]
};

export const CHART_MENU_LOB = {
  label: 'LOB',
  items: [{ label: 'Major liquidity levels of bid/ask limit order book' }]
};

export const CHART_MENU_GAP = {
  label: 'Gap',
  items: [{ label: 'Gap in session open w.r.t. previous session close' }]
};
export const CHART_MENU_ON = {
  label: 'ON',
  items: [{ label: 'High and Low of overnight session' }, { label: 'Mid of overnight session' }]
};

export const CHART_MENU_PS = {
  label: 'PS',
  items: [{ label: 'High and Low of previous RTH session' }, { label: 'Mid of previous RTH session' }]
};
export const CHART_MENU_IB = {
  label: 'IB',
  items: [{ label: 'High of initial balance' }, { label: 'Low of initial balance' }]
};
export const CHART_SUB_MENU_ARRAY = [
  { ...CHART_MENU_ALL },
  { ...CHART_MENU_SR },
  { ...CHART_MENU_VWAP },
  { ...CHART_MENU_IMBALANCE },
  { ...CHART_MENU_MC },
  { ...CHART_MENU_VP },
  { ...CHART_MENU_LOB },
  { ...CHART_MENU_GAP },
  { ...CHART_MENU_ON },
  { ...CHART_MENU_PS },
  { ...CHART_MENU_IB }
];
