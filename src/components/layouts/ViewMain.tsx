import { BASE_APP_COLOR } from "@/commons";
import React from "react";
import { DimensionValue, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
  mah?: DimensionValue;
  isInsetsBottom?: boolean;
};
MainAppView.defaultProps = {
  isInsetsBottom: true,
};

function MainAppView({ children, mah, isInsetsBottom }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View
        style={{
          maxHeight: mah,
          paddingBottom: isInsetsBottom ? insets.bottom : undefined,
          backgroundColor: BASE_APP_COLOR,
          paddingTop: insets.top,
          flex: 1,
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </SafeAreaProvider>
  );
}

export default MainAppView;
