import { put, takeEvery, all, call } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello Saga :D");
}

export const delay = (ms) => new Promise((result) => setTimeout(result, ms));

// worker saga
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// watcher saga
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* decrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "DECREMENT" });
}

function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
