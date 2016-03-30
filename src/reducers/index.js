import redux from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    id : '0'
 }

let rootReducers = function(state = initialState, action){
	console.log(state);
   switch (action.type) {
     case ActionTypes.DEFAULT_ACTION:
        return state
     default:
        return state
   }
}

module.exports = rootReducers
