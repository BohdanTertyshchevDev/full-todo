import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontypes';
import { createServerSaga } from './serverSaga';



function* rootSaga() {
    yield takeLatest(ACTION_TYPES.REQUEST_COUNTER_FETCHING, createServerSaga);
}

export default rootSaga;