/** All Assets  */
export interface CryptoCurrencyAsset {
  id: string;
  assetCode: string;
  assetName: string;
  unit: string;
  commissionRate: number;
  freeAuditWithdrawAmt: number;
  freeUserChargeAmount: number;
  createTime: number;
  test: number;
  gas?: any;
  isLegalMoney: boolean;
  reconciliationAmount: number;
  seqNum: string;
  chineseName: string;
  cnLink: string;
  enLink: string;
  logoUrl: string;
  fullLogoUrl: string;
  supportMarket?: any;
  feeReferenceAsset?: any;
  feeRate?: any;
  feeDigit: number;
  assetDigit: number;
  trading: boolean;
  tags: string[];
  plateType: string;
  etf: boolean;
  isLedgerOnly: boolean;
}

/** Ticker */
export interface Ticker {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface FormattedAssets {
  asset: CryptoCurrencyAsset;
  ticker?: Ticker | undefined;
}
