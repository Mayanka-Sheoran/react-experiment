import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions/index.js';
import {connect} from 'react-redux';
import SimpleForm from '../components/SimpleForm';

function mapStateToProps(state){
  return state
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
         <SimpleForm />
   	   </div>
   	 )
   }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(App)
