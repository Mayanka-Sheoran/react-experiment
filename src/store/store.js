import { createStore,compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index.js'

const initialState = [
  {
    id : '0'
  }
]

let finalCreateStore = compose(
  applyMiddleware()
)(createStore);

const store = finalCreateStore(rootReducer)

export default store; 

