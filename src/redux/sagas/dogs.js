import { put, takeLatest, call, all, select, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import {
  Requested
} from '../actions'

function *GetDogList() {
  let data =  yield fetch('https://dog.ceo/api/breeds/list/all');
  data =  yield data.json();
}

function *GetDogBreed({payload}) {
  let data =  yield fetch(`https://dog.ceo/api/breed/${payload}/images`);
  data =  yield data.json();
  return
}


function *GetCounter({payload}) {
  let data =  yield fetch('https://react-002-4a2b9-default-rtdb.firebaseio.com/');
  data =  yield data.json();
  return
}




export default function *() {
  yield takeEvery('DOG_LIST_REQUESTED', GetDogList)
  yield takeEvery('DOG_SPECIFIC_REQUESTED', GetDogBreed)
  yield takeEvery('DOG_COUNTER', GetCounter)

}