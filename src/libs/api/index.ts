import axios, { HttpStatusCode } from "axios";

import { TokenInfo } from "@/commons/types";
import { ResponseAPI } from "@/commons/types";

const instanceBE = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL!,
  timeout: 90000,
});

let isRefreshing = false;
let failedQueue: any[] = [];

async function refreshAccessToken() {
  const refreshToken = "";
  const URL_REFRESH_TOKEN =
    process.env.EXPO_PUBLIC_API_BASE_URL! + "/auth/refresh";
  try {
    const response = await axios.post(URL_REFRESH_TOKEN, {
      refreshToken: refreshToken,
    });
    const result: ResponseAPI<TokenInfo> = response.data;
    const tokens = result.data;
    //     await AsyncStorage.setItem(KEY_ACCESS_TOKEN, tokens.accessToken);
    //     await AsyncStorage.setItem(KEY_REFRESH_TOKEN, tokens.refreshToken);
    return tokens;
  } catch (error: any) {
    console.error("Refresh token error: ", error.message);
    throw error;
  }
}

instanceBE.interceptors.request.use(
  async function (config) {
    const idToken = "";
    if (idToken !== null) {
      config.headers.Authorization = `Bearer ${idToken}`;
    }
    console.log(`
         |-------------------------------------------
         |-- [LOG]: REQUEST
         |-- [Url]: ${config?.baseURL}${config?.url}
         |-- [Method]: ${config?.method?.toLocaleUpperCase()}
         |-- [Body]: ${config?.data ? JSON.stringify(config?.data) : "empty"}
         |-- [Headers]: ${JSON.stringify(config.headers)}
         |-------------------------------------------
         `);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instanceBE.interceptors.response.use(
  function (response) {
    console.log(`
         |-------------------------------------------
         |-- [LOG]: RESPONSE SUCCESS
         |-- [Url]: ${response?.config?.baseURL}${response?.config?.url}
         |-- [Method]: ${response?.config?.method?.toLocaleUpperCase()}
         |-- [Body]: ${
           response?.config?.data
             ? JSON.stringify(response?.config?.data)
             : "empty"
         }
         |-- [Headers]: ${JSON.stringify(response?.config.headers)}
         |-- [Status Code]: ${response?.status}
         |-- [Data]: ${JSON.stringify(response?.data)}
         |-------------------------------------------
      `);
    return response.data;
  },
  async function (error: any) {
    const originalRequest = error.config;
    console.log(error);
    if (
      error.response.status === HttpStatusCode.Unauthorized &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        try {
          const tokens = await refreshAccessToken();
          originalRequest._retry = true;
          originalRequest.headers.Authorization = `Bearer ${tokens?.accessToken}`;
          return instanceBE(originalRequest);
        } catch (refreshError) {
          isRefreshing = false;
          return Promise.reject(refreshError);
        }
      } else {
        isRefreshing = true;
        const newToken = await refreshAccessToken();
        isRefreshing = false;
        failedQueue.forEach((failedRequest) => {
          failedRequest.headers.Authorization = `Bearer ${newToken?.accessToken}`;
          instanceBE(failedRequest)
            .then((response) => {
              failedRequest.resolve(response);
            })
            .catch((err) => {
              failedRequest.reject(err);
            });
        });
        // Xóa hàng đợi
        failedQueue = [];
        originalRequest.headers.Authorization = `Bearer ${newToken?.accessToken}`;
        return instanceBE(originalRequest);
      }
    } else {
      console.log(`
      |-------------------------------------------
      |-- [LOG]: RESPONSE ERROR
      |-- [Url]: ${error?.config?.baseURL}${error?.config?.url}
      |-- [Method]: ${error?.config?.method?.toLocaleUpperCase()}
      |-- [Body]: ${
        error?.config?.data ? JSON.stringify(error?.config?.data) : "empty"
      }
      |-- [Headers]: ${JSON.stringify(error?.config.headers)}
      |-- [Status Code]: ${error?.status}
      |-- [Message Error]: ${error?.message}
      |-------------------------------------------
      `);
    }
    return Promise.reject(error);
  }
);

export default instanceBE;
