import redux from 'redux'
import * as ActionTypes from '../constants/ActionTypes'

var rootReducers = function(state = [], action){
   switch (action.type) {
     case ActionTypes.DEFAULT_ACTION:
        return state
     default:
        state
   }
}

module.exports = rootReducers
