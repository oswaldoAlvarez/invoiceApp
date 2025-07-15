import { Invoice } from "@/types/hooks/useInvoice";
import { View } from "react-native";
import { styles } from "./InvoiceItem.styles";
import { TextView } from "../textView/TextView.component";
import { getStatusColor } from "@/lib";

interface IInvoiceItem {
  invoice: Invoice;
}

export const InvoiceItem = ({ invoice }: IInvoiceItem) => {
  return (
    <View style={styles.card}>
      <TextView textStyles={styles.label}>Order ID:</TextView>
      <TextView textStyles={styles.description}>{invoice.id}</TextView>
      <TextView textStyles={styles.label}>Amount (USD):</TextView>
      <TextView textStyles={styles.description}>
        {invoice.amount} {invoice.currency}
      </TextView>
      <TextView textStyles={styles.label}>Customer:</TextView>
      <TextView textStyles={styles.description}>
        {invoice.customerInfo?.fullName ?? "-"}
      </TextView>
      <TextView textStyles={styles.label}>Status:</TextView>
      <TextView
        textStyles={[
          styles.description,
          { color: getStatusColor(invoice.status) },
        ]}
      >
        {invoice.status}
      </TextView>
      <TextView textStyles={styles.label}>Crypto Payment:</TextView>
      <TextView textStyles={styles.description}>
        {invoice.payment?.amount} {invoice.payment?.currency}
      </TextView>
    </View>
  );
};
