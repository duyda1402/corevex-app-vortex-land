import { ScreenNameEnum } from "../enum/screens";

export type RootStackParamList = Record<ScreenNameEnum, any> & {
  [ScreenNameEnum.ChatScreen]: { channel: any } | undefined;
};
