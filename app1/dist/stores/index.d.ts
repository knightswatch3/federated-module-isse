import { TypedUseSelectorHook } from "react-redux";
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    Auth: {
        authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
        management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        Auth: {
            authentication_initialState: import("reducers/auth/types/authentication-base-type").baseState_Authentication;
            management_initialState: import("reducers/auth/types/management-base-type").baseState_Management;
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export declare const useAppDispatch: () => typeof store.dispatch;
export declare const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>;
