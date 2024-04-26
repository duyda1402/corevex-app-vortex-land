import { UserInfo } from "@/commons/types";
import instanceBE from "./instance";
import { ResponseAPI } from "./interface/responce";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_ACCESS_TOKEN } from "@/commons";

export const apiLoginUser = async (idToken: string) => {
  const response = await instanceBE.post<any, ResponseAPI<UserInfo>>(
    "/v1/auth/login",
    {
      idToken: idToken,
    }
  );
  if (response.code === 200) {
    await AsyncStorage.setItem(KEY_ACCESS_TOKEN, idToken);
  }
  return response.data;
};

export const apiGetMe = async (): Promise<UserInfo | null> => {
  const response = await instanceBE.get<any, ResponseAPI<UserInfo>>(
    "/v1/user/me"
  );
  return response.data;
};

export const apiUpdateMe = async (
  body: UserInfo
): Promise<[boolean, string | null]> => {
  let result: boolean = false;
  const response = await instanceBE.put<any, ResponseAPI<null>>(
    "/v1/user/update",
    body
  );
  if (response.code === 200) {
    return [true, null];
  }

  return [result, response.message];
};
