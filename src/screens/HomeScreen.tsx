import React from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default HomeScreen;
