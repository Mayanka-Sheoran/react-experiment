import redux,{combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import todoReducers from './todoReducers'

let rootReducers = combineReducers({
   form: formReducer,
   todo: todoReducers
})

module.exports = rootReducers
