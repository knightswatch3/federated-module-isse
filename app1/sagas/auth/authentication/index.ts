import { call, put, takeEvery } from 'redux-saga/effects';
import * as CONSTANTS from '../_consts';

function* fetchAUTH_AUTHENTICATIONSagas(action){   
    try {
        const user = yield call(Api().fetchAUTH_AUTHENTICATIONInfo);
        console.log("PAvylod", action);
         // Call Api().fetchAUTH_AUTHENTICATIONInfo() instead of Api.fetchAUTH_AUTHENTICATIONInfo()
        yield put({type: CONSTANTS.AUTH_AUTHENTICATION_EVENT, user: user});
    } catch (e: unknown) {
        yield put({type: CONSTANTS.AUTH_AUTHENTICATION_EVENT_FAIL, message: e});
    }
}


function Api() {
    return {fetchAUTH_AUTHENTICATIONInfo : () => new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve({name: "Welcome"});
        }, 2000);
    }
    )}
}

function* AUTH_AUTHENTICATIONSagas() {
    yield takeEvery(CONSTANTS.AUTH_AUTHENTICATION_EVENT, fetchAUTH_AUTHENTICATIONSagas);
}

export default AUTH_AUTHENTICATIONSagas;