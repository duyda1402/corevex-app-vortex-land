import { BASE_APP_COLOR } from "@/commons";
import React from "react";
import { ColorValue, DimensionValue } from "react-native";
import { View } from "native-base";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
  mah?: DimensionValue;
  isInsetsBottom?: boolean;
  bg?: ColorValue;
};
MainAppView.defaultProps = {
  isInsetsBottom: true,
  bg: BASE_APP_COLOR,
};

function MainAppView({ children, bg, mah, isInsetsBottom }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View
        style={{
          maxHeight: mah,
          paddingBottom: isInsetsBottom ? insets.bottom : undefined,
          backgroundColor: bg,
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
