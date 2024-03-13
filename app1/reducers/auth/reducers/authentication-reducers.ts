import { PayloadAction } from "@reduxjs/toolkit";

export default {
  handleauthupClick: (_state, action: PayloadAction<number>) => {
    console.log("AUTHENTICATION_authup Payload is", action.payload);
  },
  handleauthinClick: (_state, action: PayloadAction<number>) => {
    console.log("AUTHENTICATION_authin Payload is", action.payload);
  },
};
