import { fork, all } from 'redux-saga/effects';
import { rootItemSaga } from './itemSaga';

export function* rootSaga() {
    yield all([fork(rootItemSaga)]);
}
