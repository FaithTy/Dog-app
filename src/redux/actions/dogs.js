import {GET_DOGS, DOGS_ERROR, 
  GET_DOG_BREED, 
  DOG_BREED_ERROR, 
  GET_COUNTER, COUNTER_ERROR, 
  GET_VOTED, VOTED_ERROR, 
  GET_VOTED_ALL, 
  VOTED_ALL_ERROR} from '../type'
import axios from "axios";
// 
export const getDogs = () => async dispatch => {
  try {
    const result = await axios.get(`https://dog.ceo/api/breeds/list/all`)
    console.log('result', result)
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

export const vote = (data) => async dispatch => {
  try {
    const result = await axios.post('http://localhost:5000/dogsBreed/vote' , data)
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

export const getVoteByBreed = (name) => async dispatch => {
  // console.log('ddata', data)
  try {
    const result = await axios.get(`http://localhost:5000/dogsBreed/${name}`)
    console.log(result.data, 'getVoteByBreed')
    if (result.data == null) {
      const tempData = {
        counterDisLikes: 0,
        counterLikes: 0
      } 
      dispatch({
        type: 'GET_VOTED',
        payload: tempData
      })
    } else {
      dispatch({
        type: 'GET_VOTED',
        payload: result.data
      })
    }
  } catch(e) {
    dispatch({
      type: 'VOTED_ERROR',
      payload: console.log(e)
    })
  }
}

export const getAllVotedDogBreed = () => async dispatch => {
  // console.log('ddata', data)
  try {
    const result = await axios.get('http://localhost:5000/dogsBreed/')
    console.log(result.data, 'data')
    dispatch({
      type: 'GET_VOTED_ALL',
      payload: result.data
    })
  } catch(e) {
    dispatch({
      type: 'VOTED_ALL_ERROR',
      payload: console.log(e)
    })
  }
}