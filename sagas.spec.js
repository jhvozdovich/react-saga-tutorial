import test from "tape";
import { put, call } from "redux-saga/effects";
import { incrementAsync, delay } from "./saga";

test("incrementAsync saga test", (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    // return effect instead of promise resolved after one second
    // Promise would have been {done: false, value: ???},
    call(delay, 1000)
  );

  assert.deepEqual(gen.next().value, put({ type: "INCREMENT" }));

  assert.deepEqual(gen.next(), { done: true, value: undefined });

  assert.end();
});
