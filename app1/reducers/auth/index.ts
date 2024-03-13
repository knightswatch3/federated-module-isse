import { createSlice , combineReducers} from "@reduxjs/toolkit";
    import { authentication_initialState } from "./baseStates/authentication-base-state";

        import authenticationReducers from "./reducers/authentication-reducers";
import { management_initialState } from "./baseStates/management-base-state";

        import managementReducers from "./reducers/management-reducers";

    export const authSlice = createSlice({
      name: "auth",
      initialState: { authentication_initialState, management_initialState,},
      reducers: combineReducers({
        authentication: authenticationReducers,management: managementReducers,
      }),
    });
    
    export const auth = authSlice.reducer;
    
