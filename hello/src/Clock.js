import React, { Component } from 'react';

class Clock extends Component{
    
    state = {date: new Date()};
    
    constructor(props) {
        super(props);
        //this.tick = this.tick.bind(this);
    }
    
    tick() {
        this.setState({date: new Date()});
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
            , 1000
            );
        }
        
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
        
    render(){
        return (
            <h2>지금 시간은 {this.state.date.toLocaleTimeString()} 입니다.</h2>
        )
    }
}

export default Clock;