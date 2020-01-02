import React, { Component } from 'react';

class Child extends Component {
    state = {
        name : ''
    }
    handleChange = e => {
        this.setState({
           name : e.target.value
        });
    }
    handlePreventDefault = e => {
        e.preventDefault()
        this.props.parentState(
            this.state.name
        )
    }
    render() {
        return (
          <form>
              <input 
                    value = {this.state.name} 
                    onChange = {this.handleChange}
                />
                <input type="submit" value="전송" onClick={this.handlePreventDefault}/>
          </form>
        );
    }
}

export default Child;