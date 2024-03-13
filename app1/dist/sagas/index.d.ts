import { authSagas } from "./auth/authRootSaga";
export declare function RootSaga(): Generator<import("redux-saga/effects").AllEffect<typeof authSagas>, void, unknown>;
