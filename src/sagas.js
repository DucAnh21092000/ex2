import {takeEvery} from "redux-saga/effects";
import {GET_USERS_FETCH, GET_USERS_SUCCESS, SAY_HELLO} from "./actions";
import {call, put} from "redux-saga/effects";

function usersFetch(){
    return [{
        name:"Duc ANh"
    }]
}

function* workGetUsersFetch() {
    const users = yield call(usersFetch)
    yield put({type:GET_USERS_SUCCESS,users})

}
function* mySaga(){
    yield takeEvery(GET_USERS_FETCH,workGetUsersFetch)
}
export default mySaga;