export const CHART_MENU_ALL = {
  label: 'All',
  items: [
    { label: 'Show All Holds & Breaks', visible: false, values: ['hb'] },
    { label: 'Show All Levels', visible: false, values: ['all'] }
  ]
};

export const CHART_MENU_SR = {
  label: 'S/R',
  items: [
    {
      label: 'Weekly',
      values: ['weekly_SR'],
      visible: false,
      class: 'border-[#9d0208] data-[state=checked]:bg-[#9d0208]'
    },
    {
      label: 'Daily',
      values: ['daily_SR'],
      visible: false,
      class: 'border-[#d00000] data-[state=checked]:bg-[#d00000]'
    },
    {
      label: 'Hourly',
      values: ['hourly_SR'],
      visible: false,
      class: 'border-[#dc2f02] data-[state=checked]:bg-[#dc2f02]'
    },
    {
      label: '5-min',
      values: ['5min_SR'],
      visible: false,
      class: 'border-[#f48c06] data-[state=checked]:bg-[#f48c06]'
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
          label: 'DVWAP',
          values: ['VWAP'],
          visible: false,
          class: 'border-[#33BBCC] data-[state=checked]:bg-[#33BBCC]'
        },
        {
          label: 'Top/Bottom Band 1 of DVWAP Standard Deviation',
          values: ['VWAP_Bottom_Band_1', 'VWAP_Top_Band_1'],
          visible: false,
          class: 'border-[#C2EBF0] data-[state=checked]:bg-[#C2EBF0]'
        },
        {
          label: 'Top/Bottom Band 2 of DVWAP Standard Deviation',
          values: ['VWAP_Bottom_Band_2', 'VWAP_Top_Band_2'],
          visible: false,
          class: 'border-[#C2EBF0] data-[state=checked]:bg-[#C2EBF0]'
        },
        {
          label: 'Top/Bottom Band 3 of DVWAP Standard Deviation',
          values: ['VWAP_Bottom_Band_3', 'VWAP_Top_Band_3'],
          visible: false,
          class: 'border-[#C2EBF0] data-[state=checked]:bg-[#C2EBF0]'
        },
        {
          label: 'Top/Bottom Band 4 of DVWAP Standard Deviation',
          values: ['VWAP_Bottom_Band_4', 'VWAP_Top_Band_4'],
          visible: false,
          class: 'border-[#C2EBF0] data-[state=checked]:bg-[#C2EBF0]'
        }
      ]
    },
    {
      label: 'Weekly VWAP',
      items: [
        {
          label: 'WVWAP',
          values: ['WVWAP'],
          visible: false,
          class: 'border-[#d90429] data-[state=checked]:bg-[#d90429]'
        },
        {
          label: 'Top/Bottom Band 1 of WVWAP Standard Deviation',
          values: ['WVWAP_Bottom_Band_1', 'WVWAP_Top_Band_1'],
          visible: false,
          class: 'border-[#ff8fa3] data-[state=checked]:bg-[#ff8fa3]'
        },
        {
          label: 'Top/Bottom Band 2 of WVWAP Standard Deviation',
          values: ['WVWAP_Bottom_Band_2', 'WVWAP_Top_Band_2'],
          visible: false,
          class: 'border-[#ff8fa3] data-[state=checked]:bg-[#ff8fa3]'
        },
        {
          label: 'Top/Bottom Band 3 of WVWAP Standard Deviation',
          values: ['WVWAP_Bottom_Band_3', 'WVWAP_Top_Band_3'],
          visible: false,
          class: 'border-[#ff8fa3] data-[state=checked]:bg-[#ff8fa3]'
        },
        {
          label: 'Top/Bottom Band 4 of WVWAP Standard Deviation',
          values: ['WVWAP_Bottom_Band_4', 'WVWAP_Top_Band_4'],
          visible: false,
          class: 'border-[#ff8fa3] data-[state=checked]:bg-[#ff8fa3]'
        }
      ]
    }
  ]
};

export const CHART_MENU_IMBALANCE = {
  label: 'Imbalance',
  items: [
    {
      label: 'Volume Delta Imbalance',
      values: [],
      visible: false
    },
    {
      label: 'Footprint Imbalance',
      values: [],
      visible: false
    }
  ]
};

export const SUB_CHART_MENU_TERM = {
  label: 'Trend',
  items: [
    {
      label: 'Short Term Trend',
      values: [],
      visible: false
    },
    {
      label: 'Mid Term Trend',
      values: [],
      visible: false
    },
    {
      label: 'Long Term Trend',
      values: [],
      visible: false
    }
  ]
};

export const CHART_MENU_MC = {
  label: 'MC',
  items: [
    {
      label: 'Micro Composite Volume Profile VAL/VAH',
      values: ['MC_VAL', 'MC_VAH'],
      visible: false
    },
    {
      label: 'Micro Composite Volume Profile POC',
      values: ['MC_POC'],
      visible: false
    }
  ]
};

export const CHART_MENU_VP = {
  label: 'VP',
  items: [
    {
      label: 'Previous RTH Session Volume Profile VAL/VAH',
      values: ['VP_VAL', 'VP_VAH'],
      visible: false,
      class: 'border-[#FFC5F9] data-[state=checked]:bg-[#FFC5F9]'
    },
    {
      label: 'Previous RTH Session Volume Profile POC',
      values: ['VP_POC'],
      visible: false,
      class: 'border-[#FF3DEC] data-[state=checked]:bg-[#FF3DEC]'
    }
  ]
};

export const CHART_MENU_LOB = {
  label: 'LOB',
  items: [
    {
      label: 'Major Liquidity Levels of Limit Order Book',
      values: ['Major_liquidity_price'],
      visible: false,
      class: 'border-[#111D4B] data-[state=checked]:bg-[#111D4B]'
    }
  ]
};

export const CHART_MENU_GAP = {
  label: 'Gap',
  items: [{ label: 'Price Gap in Session Open w.r.t. Previous RTH Price Range', values: [], visible: false }]
};

export const CHART_MENU_ON = {
  label: 'ON',
  items: [
    {
      label: 'Overnight Session High/Low Prices',
      values: ['Overnight_high', 'Overnight_low'],
      visible: false,
      class: 'border-[#7360DF] data-[state=checked]:bg-[#7360DF]'
    },
    {
      label: 'Overnight Session Mid Price',
      values: ['Overnight_mid'],
      visible: false,
      class: 'border-[#C499F3] data-[state=checked]:bg-[#C499F3]'
    }
  ]
};

export const CHART_MENU_PS = {
  label: 'PS',
  items: [
    {
      label: 'Previous RTH Session High/Low Prices',
      values: ['prev_session_max', 'prev_session_min'],
      visible: false,
      class: 'border-[#0B60B0] data-[state=checked]:bg-[#0B60B0]'
    },
    {
      label: 'Previous RTH Session Mid Price',
      values: ['prev_session_mid'],
      visible: false,
      class: 'border-[#40A2D8] data-[state=checked]:bg-[#40A2D8]'
    }
  ]
};

export const CHART_MENU_IB = {
  label: 'IB',
  items: [
    {
      label: 'Initial Balance High/Low Price',
      values: ['initial_balance_high', 'initial_balance_low'],
      visible: false,
      class: 'border-[#C6A969] data-[state=checked]:bg-[#C6A969]'
    },
    {
      label: 'Initial Balance Mid Price',
      values: ['initial_balance_mid'],
      visible: false,
      class: 'border-[#F1E4C3] data-[state=checked]:bg-[#F1E4C3]'
    }
  ]
};

export const CHART_MENU_BH = {
  label: 'BH',
  items: [
    {
      label: 'Level holds',
      values: ['hold'],
      visible: false
    },
    { label: 'Level breaks', values: ['break'], visible: false }
  ]
};

export const LEFT_CHART_SUB_MENU_LEVELS = [
  { ...CHART_MENU_ALL },
  { ...CHART_MENU_SR },
  { ...CHART_MENU_VWAP },
  // { ...CHART_MENU_MC },
  { ...CHART_MENU_VP },
  { ...CHART_MENU_ON },
  { ...CHART_MENU_PS },
  { ...CHART_MENU_IB },
  { ...CHART_MENU_LOB }
  // { ...CHART_MENU_BH }
];

export const RIGHT_CHART_SUB_MENU_LEVELS = [
  { ...SUB_CHART_MENU_TERM },
  { ...CHART_MENU_IMBALANCE },
  { ...CHART_MENU_GAP }
];

export const levels_names: any = {
  VWAP: 'VWAP',
  VWAP_Bottom_Band_1: 'VWAP Bottom Band 1',
  VWAP_Top_Band_1: 'VWAP Top Band 1',
  VWAP_Bottom_Band_2: 'VWAP Bottom Band 2',
  VWAP_Top_Band_2: 'VWAP Top Band 2',
  VWAP_Bottom_Band_3: 'VWAP Bottom Band 3',
  VWAP_Top_Band_3: 'VWAP Top Band 3',
  VWAP_Bottom_Band_4: 'VWAP Bottom Band 4',
  VWAP_Top_Band_4: 'VWAP Top Band 4',
  WVWAP: 'WVWAP',
  WVWAP_Bottom_Band_1: 'WVWAP Bottom Band 1',
  WVWAP_Top_Band_1: 'WVWAP Top Band 1',
  WVWAP_Bottom_Band_2: 'WVWAP Bottom Band 2',
  WVWAP_Top_Band_2: 'WVWAP Top Band 2',
  WVWAP_Bottom_Band_3: 'WVWAP Bottom Band 3',
  WVWAP_Top_Band_3: 'WVWAP Top Band 3',
  WVWAP_Bottom_Band_4: 'WVWAP Bottom Band 4',
  WVWAP_Top_Band_4: 'WVWAP Top Band 4',
  // MC_VAL: 'MC VAL',
  // MC_VAH: 'MC VAH',
  // MC_POC: 'MC POC',
  VP_VAL: 'VP VAL',
  VP_VAH: 'VP VAH',
  VP_POC: 'VP POC',
  Overnight_low: 'Overnight low',
  Overnight_high: 'Overnight high',
  Overnight_mid: 'Overnight mid',
  prev_session_mid: 'Prev session mid',
  prev_session_max: 'Prev session high',
  prev_session_min: 'Prev session low',
  initial_balance_high: 'Initial balance high',
  initial_balance_low: 'Initial balance low',
  initial_balance_mid: 'Initial balance mid',
  '5min_SR': 'SR 5min',
  daily_SR: 'SR daily',
  hourly_SR: 'SR hourly',
  weekly_SR: 'SR weekly',
  Major_liquidity_price: 'Major liquidity'
};

export const symbols: any = {
  NQ: {
    name: 'Nasdaq 100',
    image: '/images/nq.png',
    fixed: 2,
    legend: 'E-mini Futures Nasdaq-100',
    url: 'https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.html'
  },
  ES: {
    name: 'S&P 500',
    image: '/images/es.png',
    fixed: 2,
    legend: 'E-mini Futures S&P 500',
    url: 'https://www.cmegroup.com/markets/equities/sp/e-mini-sandp500.quotes.html#venue=globex'
  },
  CL: {
    name: 'Crude Oil',
    image: '/images/cl.svg',
    fixed: 2,
    legend: 'E-mini Futures Crude Oil',
    url: 'https://www.cmegroup.com/markets/energy/crude-oil/emini-crude-oil.html#venue=globex'
  },
  GC: {
    name: 'Gold Futures',
    image: '/images/gc.svg',
    fixed: 1,
    legend: 'E-mini Futures Gold',
    url: 'https://www.cmegroup.com/markets/metals/precious/e-mini-gold.html#venue=globex'
  },
  YM: {
    name: 'Dow Jones',
    image: '/images/ym.svg',
    fixed: 0,
    legend: 'E-mini Futures Dow Jones',
    url: 'https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html'
  },
  RT: {
    name: 'E-mini Russell 2000',
    image: '/images/rt.svg',
    fixed: 1,
    legend: 'E-mini Futures Russell 2000',
    url: 'https://www.cmegroup.com/markets/equities/russell/e-mini-russell-2000.html#venue=globex'
  }
};
