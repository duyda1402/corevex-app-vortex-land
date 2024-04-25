import { ExpoConfig, ConfigContext } from "expo/config";

module.exports = ({ config }: ConfigContext): ExpoConfig => {
  // prints 'My App'
  return {
    name: "Vortex Land",
    slug: "corevex-app-vortex-land",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    runtimeVersion: {
      policy: "sdkVersion",
    },
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/adaptive-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      usesAppleSignIn: true,
      supportsTablet: true,
      googleServicesFile: "./assets/firebase/GoogleService-Info.plist",
      bundleIdentifier: "com.dodyy.vortex",
    },
    android: {
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      package: "com.dodyy.vortex",
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff",
      },
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-google-signin/google-signin",
    ],
    extra: {
      eas: {
        projectId: "a06e2adb-177c-4598-98cc-ee332483c3aa",
      },
    },
    updates: {
      url: "https://u.expo.dev/a06e2adb-177c-4598-98cc-ee332483c3aa",
    },
  };
};
