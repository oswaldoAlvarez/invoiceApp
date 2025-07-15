import React from "react";
import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { styles } from "@/styles/+not-found.styles";
import { TextView } from "../components/textView/TextView.component";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <TextView textStyles={styles.title}>
          This screen doesn't exist.
        </TextView>
        <Link href="/" style={styles.link}>
          <TextView textStyles={styles.linkText}>Go to home screen!</TextView>
        </Link>
      </View>
    </>
  );
}
