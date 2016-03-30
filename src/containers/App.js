import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions/index.js';
import {connect} from 'react-redux';

function mapStateToProps(state){
  return {
    id: '0'  	
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions,dispatch)	
  }
}

class App extends Component {
   render(){
   	 return (
   	   <div>
   	     <h1>Hello</h1>
   	   </div>
   	 )
   }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(App)