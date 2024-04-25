import { Spinner, View } from "native-base";
import React from "react";
import { ColorValue, StyleProp, StyleSheet, ViewProps } from "react-native";

type Props = {
  sizeLoading?: "sm" | "md" | "lg";
  loading?: boolean;
  wrapperStyle?: StyleProp<ViewProps>;
  colorLoading?: ColorValue;
  bg?: string;
  opacity?: number;
};

export default function OverlayLoading({
  wrapperStyle,
  sizeLoading,
  loading,
  colorLoading = "indigo.500",
  bg = "white",
  opacity = 1,
}: Props) {
  return (
    <View bg={bg} style={[styles.overlay, wrapperStyle]} opacity={opacity}>
      {loading && <Spinner color={colorLoading} size={sizeLoading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    ...StyleSheet.absoluteFillObject,
  },
});
