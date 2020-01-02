import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }
    render() {
        const { data, onRemove, onUpdate} = this.props;
        
        // if(!data) return null;; //기본값 설정하거나 리턴값 반환해서 에러해결
        const list = data.map(
            info => <PhoneInfo
                        onUpdate = {onUpdate}
                        onRemove={onRemove} 
                        info = { info } 
                        key= {info.id}
                    />
        )

        return (
            <div>
                {list}
            </div>
        
        );
    }
}

export default PhoneInfoList;