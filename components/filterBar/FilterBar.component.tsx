import {
  CRYPTO_OPTIONS,
  CryptoType,
  InvoiceStatus,
} from "@/types/hooks/useInvoice";
import { View } from "react-native";
import { styles } from "./FilterBar.styles";
import { Tag } from "../tag/Tag.component";
import { useState } from "react";

type TagType = "completed" | "allCryptos";
type FilterChange = { status: InvoiceStatus[] } | { crypto: CryptoType[] };

interface IFilterBar {
  onChange: (filters: {
    status?: InvoiceStatus[];
    crypto?: CryptoType[];
  }) => void;
}

export const FilterBar = ({ onChange }: IFilterBar) => {
  const [selected, setSelected] = useState<TagType>("allCryptos");

  const handleFilter = (tagType: TagType, filters: FilterChange) => {
    setSelected(tagType);
    onChange(filters);
  };

  return (
    <View style={styles.container}>
      <Tag
        label="Completed Only"
        onPress={() => handleFilter("completed", { status: ["COMPLETED"] })}
        containerStyle={[
          styles.tagStyle,
          {
            marginRight: 8,
            backgroundColor: selected === "completed" ? "#fff" : "#000",
          },
        ]}
        textStyle={{
          color: selected === "completed" ? "#000" : "#fff",
        }}
      />
      <Tag
        label="All Cryptos"
        onPress={() => handleFilter("allCryptos", { crypto: CRYPTO_OPTIONS })}
        containerStyle={[
          styles.tagStyle,
          {
            backgroundColor: selected === "allCryptos" ? "#fff" : "#000",
          },
        ]}
        textStyle={{
          color: selected === "allCryptos" ? "#000" : "#fff",
        }}
      />
    </View>
  );
};
