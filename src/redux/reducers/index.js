import { combineReducers } from "redux";
import dogReducer from './dogs'

export default combineReducers({
  dogs: dogReducer,
})