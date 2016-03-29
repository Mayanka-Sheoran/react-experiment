import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(){
    super();
    this.state ={
      red:0,
      green:0,
      blue:0
    };
    this.update= this.update.bind(this);
  }
  update(){
    this.setState({
      red:ReactDOM.findDOMNode(this.refs.red).value,
      green:ReactDOM.findDOMNode(this.refs.green).value,
      blue:ReactDOM.findDOMNode(this.refs.blue).value
    });
    console.log(ReactDOM.findDOMNode(this.refs.red).value);

  }
  render() {
    return (
      <div>
        <Widget ref='red' update={this.update} />
        {this.state.red}
        <br></br>
        <Widget ref='green' update={this.update} />
        {this.state.green}
        <br></br>
        <Widget ref='blue' update={this.update} />
        {this.state.blue}
        <br></br>
      </div>
    );
  }
}


class Widget extends React.Component{
  render(){
    return (
        <input type='range' min='0' max = '255' onChange = {this.props.update}/>
    );
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
