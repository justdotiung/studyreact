import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name : '',
        phone : ''
    }
    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.parentState(this.state)
        //초기화 작업
        this.setState({
            name : '',
            phone: ''
        })
    }
    render() {
        return (
            <form>
                <input 
                    placeholder ='이름'
                    onChange ={this.handleChange}
                    name='name'
                    value= {this.state.name}
                />
                <input 
                    onChange ={this.handleChange}
                    name='phone'
                    value={this.state.phone}
                />
                <input type ='submit' value='전송' onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default PhoneForm;