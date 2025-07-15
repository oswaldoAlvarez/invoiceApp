import "../reactotronConfig";

import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#111" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Invoices",
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
