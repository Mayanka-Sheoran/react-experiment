import { createStore,compose,applyMiddleware } from 'redux'
import rootReducer from '../reducers/index.js'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(rootReducer)

export default store; 

