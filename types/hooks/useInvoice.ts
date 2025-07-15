export type InvoiceStatus = "CREATED" | "PENDING" | "COMPLETED" | "EXPIRED";
export type CryptoType = "USDT-TRX" | "USDT-ETH" | "ETH" | "TRX";

export interface CustomerInfo {
  fullName: string;
}

export interface PaymentInfo {
  createdAt: number;
  currency: CryptoType;
  amount: number;
}

export interface Invoice {
  id: string;
  status: InvoiceStatus;
  amount: number;
  currency: string;
  createdAt: number;
  customerInfo: CustomerInfo;
  payment: PaymentInfo;
}

export const CRYPTO_OPTIONS: CryptoType[] = [
  "USDT-TRX",
  "USDT-ETH",
  "ETH",
  "TRX",
];
