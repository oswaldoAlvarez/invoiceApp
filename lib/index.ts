import { InvoiceStatus } from "@/types/hooks/useInvoice";

export const getStatusColor = (status: InvoiceStatus): string => {
  switch (status) {
    case "COMPLETED":
      return "#4ade80";
    case "PENDING":
      return "#facc15";
    case "EXPIRED":
      return "#f87171";
    case "CREATED":
      return "#38bdf8";
    default:
      return "#e5e7eb";
  }
};
