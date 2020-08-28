import { put, takeEvery, all } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello Saga :D");
}

const delay = (ms) => new Promise((result) => setTimeout(result, ms));

// worker saga
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// watcher saga
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
