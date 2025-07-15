import {
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { TextView } from "../textView/TextView.component";
import { styles } from "./Tag.styles";

export type ITag = {
  label: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
};

export const Tag = ({
  label,
  onPress,
  containerStyle,
  textStyle = {},
}: ITag) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <TextView textStyles={[styles.text, textStyle]}>{label}</TextView>
    </TouchableOpacity>
  );
};
