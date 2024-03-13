import { all } from 'redux-saga/effects';

      import * as authenticationSubModuleSagas from './authentication';
export function* authSagas() {
 yield all([authenticationSubModuleSagas.default]);
};