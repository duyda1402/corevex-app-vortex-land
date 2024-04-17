import { ScreenNameEnum } from "../enum/screens";

export type RootStackParamList = {
  [ScreenNameEnum.ChatScreen]: { channel: any } | undefined;
};
