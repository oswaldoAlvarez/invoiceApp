import { View, FlatList, ActivityIndicator } from "react-native";
import { useRef, useState } from "react";
import { CryptoType, InvoiceStatus, Invoice } from "@/types/hooks/useInvoice";
import { useInvoices } from "@/hooks";
import { FilterBar, InvoiceItem, TextView } from "@/components";
import { styles } from "@/styles/index.styles";

interface IFilters {
  status?: InvoiceStatus[];
  crypto?: CryptoType[];
}

export default function InvoicesScreen() {
  const [filters, setFilters] = useState<IFilters>({});
  const [filterLoading, setFilterLoading] = useState(false);
  const loadingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { data, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInvoices({ filters, pageSize: 10 });

  const handleChangeFilters = (newFilters: IFilters) => {
    setFilters(newFilters);
    setFilterLoading(true);

    if (loadingTimeout.current) clearTimeout(loadingTimeout.current);

    loadingTimeout.current = setTimeout(() => {
      setFilterLoading(false);
    }, 900);
  };

  const invoices: Invoice[] = data
    ? data.pages.flatMap((page) => page.items)
    : [];

  return (
    <View style={styles.container}>
      <FilterBar onChange={handleChangeFilters} />
      {isError && (
        <TextView textStyles={styles.error}>Error loading invoices</TextView>
      )}
      <FlatList
        data={invoices}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <InvoiceItem invoice={item} />}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          !filterLoading && isFetchingNextPage ? <ActivityIndicator /> : null
        }
        showsVerticalScrollIndicator={false}
      />
      {filterLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size={36} />
        </View>
      )}
    </View>
  );
}
