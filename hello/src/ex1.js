import React from 'react';

class Ex1 extends React.Component {
    
    static defaultProps = {
        name : '리액트'
    }
   
    render(){
        return <h1>안녕하세요. { this.props.name }님</h1>;
    }
}
/*
Ex1.defaultProps = {
    name : '리액트'
}
*/

export default Ex1;