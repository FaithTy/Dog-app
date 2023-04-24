// import {GET_BOOKS } from '../types'
import {GET_DOGS, DOGS_ERROR, GET_DOG_BREED, DOG_BREED_ERROR, GET_COUNTER} from '../type'


const INITIAL_STATE = {
  dogs: [],
  selectedBreed: '',
  loading: true,
  counterDislike: 0,
  counterLike: 0
}

export default function(state = INITIAL_STATE, action) {
  console.log(state, '::')
  switch(action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        loading: false
      }
    case GET_DOG_BREED:
      return {
        ...state,
        selectedBreed:action.payload,
        counterDislike: 0,
        counterLike: 0
        
      }
      case GET_COUNTER:
        return {
          ...state,
          selectedBreed:action.payload,
          counterDislike: 0,
          counterLike: 0
          
        }
    default: return state
  }
}