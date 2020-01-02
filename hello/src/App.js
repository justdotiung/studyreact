import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Life from './Life';
//import Clock from './Clock';
//import Ex1 from './ex1';

class App extends React.Component {
  state= {a : 1}

  btn =() => {
    this.setState({
      a : this.state.a +1
    });
  }
  
  render(){
    return ( 
      <div>
        {this.state.a !== 4 && <Life a={this.state.a}/>}
        <button onClick={this.btn}>버튼</button>
      </div>
       )
  }

}

export default App;
