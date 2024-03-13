import { createSlice } from "@reduxjs/toolkit";
    import { management_initialState } from "../baseStates/management-base-state";
    import reducers from "../reducers/management-reducers";
    
    export const managementSlice = createSlice({
      name: "management",
      initialState: management_initialState,
      reducers,
    });
    
    export const managementSliceReducer = managementSlice.reducer;
    
    
