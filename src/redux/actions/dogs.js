import {GET_DOGS, DOGS_ERROR, GET_DOG_BREED, DOG_BREED_ERROR, GET_COUNTER, COUNTER_ERROR} from '../type'
import axios from "axios";

export const getDogs = () => async dispatch => {
  try {
    const result = await axios.get(`https://dog.ceo/api/breeds/list/all`)
    dispatch( {
      type: 'GET_DOGS',
      payload: result.data.message
    })
  } catch(e) {
    dispatch({
      type: 'DOGS_ERROR',
      payload: console.log(e)
    })
  }
}


export const getSelectedBreed = (breed) => async dispatch => {
  try {
    const result = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      const getRandResultImage = result.data.message[Math.floor(Math.random() * result.data.message.length)]
    dispatch({
      type: 'GET_DOG_BREED',
      payload: getRandResultImage
    })
  } catch(e) {
    dispatch({
      type: 'DOG_BREED_ERROR',
      payload: console.log(e)
    })
  }
}

export const counter = () => async dispatch => {
  console.log()
  try {
    const result = await axios.get('https://dog-app-17267-default-rtdb.firebaseio.com/')
    //   // headers: {'Access-Control-Allow-Origin': '*'},
    //   headers: { 'Content-Type': 'application/json'},

    // }) 
    console.group(result, 'resulttt::')
    dispatch({
      type: 'GET_COUNTER',
      payload: result.data
    })
  } catch(e) {
    dispatch({
      type: 'COUNTER_ERROR',
      payload: console.log(e)
    })
  }
}