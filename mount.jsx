import React from 'react';
import ReactDOM from 'react-dom';

class Mount extends React.Component {
  constructor() {
    super();
    this.state={
      val:0
    };
    this.update= this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1});
  }
  componentWillMount(){
    console.log('mounting');
  }
  render(){
    console.log('Rendering');
    return(
    <div>
      {this.state.val}
      <button onClick={this.update}>{this.state.val}</button>
    </div>
  )
  }
  componentDidMount(){
    this.inc = setInterval(this.update,500);
  }
  componentWillUnmount(){
    clearInterval(this.inc);
  }
}

class UnMount extends React.Component {
  mount(){
    ReactDOM.render(<Mount/>,document.getElementById('a'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }
}

ReactDOM.render(<UnMount/>, document.getElementById('hello'));
