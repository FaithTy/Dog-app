import { put, takeLatest, call, all, select, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import {
  Requested
} from '../actions'

function *GetDogList() {
  console.log('getdoglist sagaaa')
  let data =  yield fetch('https://dog.ceo/api/breeds/list/all');
  data =  yield data.json();
}

function *GetDogBreed({payload}) {
  let data =  yield fetch(`https://dog.ceo/api/breed/${payload}/images`);
  data =  yield data.json();
}


function *GetVote({payload}) {
  console.log(payload, 'is saga is working')
  let data =  yield fetch(`http://localhost:5000/dogsBreed/${payload}`);
  data =  yield data.json();
}




export default function *() {
  yield takeEvery('DOG_LIST_REQUESTED', GetDogList)
  yield takeEvery('DOG_SPECIFIC_REQUESTED', GetDogBreed)
  yield takeEvery('DOG_VOTED_REQUESTED', GetVote)

}