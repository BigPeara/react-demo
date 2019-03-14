import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getMens} from './actions/action'

class App extends Component {
  constructor(props,context){
     super(props);
  }

  componentDidMount(){

    const {dispatch}=this.props

    dispatch(getMens({},()=>{
      debugger
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  }
}

export default connect(mapStateToProps)(App);
