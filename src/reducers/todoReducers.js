import redux from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    id : '0'
 }

let todoReducers = function(state = initialState, action){
   switch (action.type) {
     case ActionTypes.DEFAULT_ACTION:
        return state
     default:
        return state
   }
}

module.exports = todoReducers