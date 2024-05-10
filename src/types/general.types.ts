export interface IIconAndIllustration {
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  logoColor?: string;
  textColor?: string;
}

export interface IPlan {
  title: string;
  description?: string;
  buttonLabel: string;
  priceMonthly: number;
  priceAnnually: number;
  features: Array<{
    title: string;
    subtitles?: string[];
  }>;
  is_coming_soon: boolean;
  month_price_id: string;
  year_price_id: string;
  is_free: boolean;
  order_id: number;
  month_currency: string;
  year_currency: string;
}
