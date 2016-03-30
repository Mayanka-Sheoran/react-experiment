import * as ActionTypes from '../constants/ActionTypes'

let todoAction = {
   todoClick : function(data){
   	  return{
   	  	type: ActionTypes.DEFAULT_ACTION,
   	  	data: data
   	  }
   }
}

export default todoAction