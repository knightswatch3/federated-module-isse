import { createSlice } from "@reduxjs/toolkit";
import { authentication_initialState } from "../baseStates/authentication-base-state";
import reducers from "../reducers/authentication-reducers";

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: authentication_initialState,
  reducers,
});

export const AuthenticationSliceReducer = AuthenticationSlice.reducer;
