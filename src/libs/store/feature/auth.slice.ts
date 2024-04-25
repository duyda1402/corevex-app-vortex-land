import { UserInfo } from "@/commons/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { set } from "lodash";

// Define a type for the slice state

export interface AuthState {
  me: UserInfo | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  me: null,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    actionSetMe: (state, action: PayloadAction<UserInfo | null>) => {
      state.me = action.payload;
    },
    actionLogout: (state) => {
      state.me = null;
    },
  },
});

export const { actionLogout, actionSetMe } = authSlice.actions;

export const authReducer = authSlice.reducer;
