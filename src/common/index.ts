export interface IParams {
  [key: string]: unknown;
}

interface IQuantitativePercentage {
  quantity: number;
  percentage: number;
}

export interface ISaleProduct {
  hourOrDayOrWeek: number;
  revenue: number;
  profit: number;
  expenses: number;
  date?: string | null;
}

export interface IFinancialPlan {
  planSum: number;
  allSum: number;
  percentage: number;
}

export interface IRevenue extends IFinancialPlan {}
export interface IProfit extends IFinancialPlan {}

export interface IExpenses {
  allExpenses: number;
  percentage: number;
}

export interface ISalesFunnelDto {
  views: IQuantitativePercentage;
  clicks: IQuantitativePercentage;
  basket: IQuantitativePercentage;
  orders: IQuantitativePercentage;
}

export interface IAdvertisementDto {
  advertisingExpenses: number;
  advertisingRevenue: number;
  drrPercentage: number;
  salesFunnelDto: ISalesFunnelDto;
}

export interface ISalesData {
  revenue: IRevenue;
  profit: IProfit;
  expenses: IExpenses;
  salesReportsDto: ISaleProduct[];
  allMarginality: number;
  allProfitability: number;
  allExpenditure: number;
  advertisementDto: IAdvertisementDto;
}

export interface IProduct {
  id: number;
  nmId: string;
  currencyIsoCode: string;
  vendorCode: string;
  price: number;
  discount: number;
  discountPrice: number;
}
