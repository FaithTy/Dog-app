import { fork, all } from 'redux-saga/effects'

import dog from './dogs'

export default function* () {
  yield all([
    fork(dog)
  ])
}