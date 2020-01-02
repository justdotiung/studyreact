import React, {Component} from 'react';

class Life extends Component{
   
    // static defaultProps = {
    //     a: 1
    // }
    state = {a : 0}

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // UNSAFE_componentWillMount(){console.log(5)}
    static getDerivedStateFromProps(props, state){
        if(state.a !== props.a){
            return {
               a : props.a
            }
        }
        return null;
    }
    
    componentDidMount(){console.log(2)}
    
    
    // 업데이트
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.a === 3){
            return false;
        }
        return true;
    }
    
    // getSnapshotBeforeUpdate(){console.log(7)}
    
    componentDidUpdate(nextProps,nextState){
        if(this.props.a !== nextProps.a)
            console.log("componentDidUpdate");
    }
    
    // UNSAFE_componentWillUpdate(){console.log(9)}
    
    // UNSAFE_componentWillReceiveProps(props){console.log(0)}
    
    // // 마운트 해제
    componentWillUnmount(){console.log('unmount')}
    
    render(){
        return (     
        <div>
            props는{this.props.a}이다<br/>
            state는{this.state.a}이다
        </div>
        )
    }
}

export default Life