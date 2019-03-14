import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getMens} from './actions/action'

class App extends Component {
  constructor(props,context){
     super(props);
  }


  componentWillMount(){
    //render渲染页面前dom加载前执行
    console.log('componentWillMount')
  }

  componentDidMount(){
    //render渲染页面后dom加载结束后执行componentDidMount
    console.log('componentDidMount')
    const {dispatch}=this.props

    dispatch(getMens({},()=>{
      
    }))
  }

  shouldComponentUpdate(){
    //组件局部变量state更新render渲染后执行shouldComponentUpdate
    console.log('shouldComponentUpdate')
  }

  componentWillUpdate(){
    //组件局部变量state更新render更新渲染前执行componentWillUpdate
    console.log('componentWillUpdate')
  }

  componentDidUpdate(){
    //组件局部变量state更新当render更新渲染后执行componentDidUpdate
    console.log('componentDidUpdate')
  }

  componentWillReceiveProps(){
    //render渲染初始化不会加载，当父组件的props改变子组件componentWillReceiveProps触发
    console.log('componentWillReceiveProps')
  }
  
  componentWillUnmount(){
    //组件卸载后执行componentWillUnmount
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
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
