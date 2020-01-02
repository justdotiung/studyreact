import React from 'react';
// import PhoneForm from './components/PhoneForm';
import Child from './components/Child';



class App extends React.Component {
  state ={
    info : []
  }
  parentState = data => {
    console.log(data);
  }
  render(){
    return ( 
      <div>
        {/* <PhoneForm parentState={this.parentState} /> */}
        <Child parentState={this.parentState}/>
      </div>
       )
  }

}

export default App;
