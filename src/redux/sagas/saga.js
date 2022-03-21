import {takeEvery} from "redux-saga/effects";
import { takeLatest } from 'redux-saga/effects'
import {GET_USER, GET_USER_FETCH, CREATE_USER, CREATE_USER_FETCH} from "../const";
import {call, put, take} from "redux-saga/effects";

import axios from "axios";

async function usersFetch(){
     return  await axios.get('/user')
}


function* workGetUsersFetch() {
    const users = yield call(usersFetch)
    yield put({type:GET_USER,users})
}

function* mySaga(){
    yield takeEvery(GET_USER_FETCH,workGetUsersFetch)
}
export default mySaga;