import React from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import PhoneInfo from './components/PhoneInfo';



class App extends React.Component {
  id = 0;

  state ={
    info : []
  }
  
  handelData = data => {
    this.setState({
      info: this.state.info.concat({
        ...data,
        id : this.id++
      })
    })
  }
  handleUpdate = (id, data) => {
    const { info } = this.state;
    this.setState({
      info: info.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data
            };
          }
          return info;
        }
      )
    });
  }
  handleRemove = id => {
    const { info } = this.state
    this.setState({
      info: info.filter(info => info.id !== id )
    });
  }
  render(){
    return ( 
      <div>
        <PhoneForm parentState={this.handelData} />
        <PhoneInfoList 
          data={this.state.info}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
       )
  }

}

export default App;
