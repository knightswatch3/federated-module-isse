import { all } from "redux-saga/effects";

import { authSagas } from "./auth/authRootSaga";

export function* RootSaga() {
  yield all([authSagas]);
}
