export declare const rootReducer: import("@reduxjs/toolkit").Reducer<{
    Auth: {
        authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
        management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
    };
}, import("@reduxjs/toolkit").UnknownAction, Partial<{
    Auth: {
        authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
        management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
    } | undefined;
}>>;
