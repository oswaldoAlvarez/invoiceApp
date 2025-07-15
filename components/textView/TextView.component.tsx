import { Text, TextProps, TextStyle, View, ViewStyle } from "react-native";
import { styles } from "./TextView.styles";
import { PropsWithChildren } from "react";

type alignContentType = "center" | "flex-start" | "flex-end";

interface IText {
  contentStyles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle | TextStyle[];
  align?: alignContentType;
}

type ITextView = PropsWithChildren<IText> & TextProps;

export const TextView = ({
  children,
  contentStyles,
  textStyles,
  align,
  ...textProps
}: ITextView) => {
  return (
    <View style={[contentStyles, { alignSelf: align }]}>
      <Text style={[styles.defaultText, textStyles]} {...textProps}>
        {children}
      </Text>
    </View>
  );
};
