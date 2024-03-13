import { call, put, takeEvery } from "redux-saga/effects";
import * as CONSTANTS from "../_consts";

function* fetchAUTH_SIGNUPSagas(action) {
  try {
    const user = yield call(Api().fetchAUTH_SIGNUPInfo);
    console.log("PAvylod", action);
    // Call Api().fetchAUTH_SIGNUPInfo() instead of Api.fetchAUTH_SIGNUPInfo()
    yield put({ type: CONSTANTS.AUTH_SIGNUP_EVENT, user: user });
  } catch (e: unknown) {
    yield put({ type: CONSTANTS.AUTH_SIGNUP_EVENT_FAIL, message: e });
  }
}

function Api() {
  return {
    fetchAUTH_SIGNUPInfo: () =>
      new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ name: "Welcome" });
        }, 2000);
      }),
  };
}

function* AUTH_SIGNUPSagas() {
  yield takeEvery(CONSTANTS.AUTH_SIGNUP_EVENT, fetchAUTH_SIGNUPSagas);
}

export default AUTH_SIGNUPSagas;
