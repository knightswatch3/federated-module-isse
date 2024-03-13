export declare const authSlice: import("@reduxjs/toolkit").Slice<{
    authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
    management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
}, never, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<{
    authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
    management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
}>>;
export declare const auth: import("@reduxjs/toolkit").Reducer<{
    authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
    management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
}>;
