import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import dogsReducer from './reducers/dogs'
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  dog: dogsReducer
})

const sagaMiddleWare = createSagaMiddleware()

const middleWare = [sagaMiddleWare]

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

sagaMiddleWare.run(watcherSaga)

export default store;