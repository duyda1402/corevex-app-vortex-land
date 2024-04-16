import React from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

const ViewMain = ({ children }: Props) => {
  const insets = useSafeAreaInsets();
  console.log("insets", insets);
  return (
    <SafeAreaProvider>
      <View
        style={{ paddingTop: insets.top, flex: 1, justifyContent: "center" }}
      >
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default ViewMain;
