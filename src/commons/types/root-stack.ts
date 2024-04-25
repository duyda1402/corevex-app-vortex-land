import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenNameEnum } from "../enum/screens";
import { UserInfo } from "./user.interface";

export type RootStackParamList = Record<ScreenNameEnum, any> & {
  [ScreenNameEnum.ChatScreen]: { channel: any } | undefined;
  [ScreenNameEnum.WelcomeScreen]: { user: UserInfo } | undefined;
};

export type NavigationCustomProps = StackNavigationProp<RootStackParamList>;
