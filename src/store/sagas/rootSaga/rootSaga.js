
import { all } from "redux-saga/effects";

/**
 * Placeholder for a real saga, so there's
 * something to go in the root saga.
 */
function * nullSaga () {
}

export default function * rootSaga () {
  yield all([
    nullSaga
  ]);
}