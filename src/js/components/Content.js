import React, { Component } from 'react';
import data from '../data.js';

class Content extends Component {
    constructor() {
        super();
        this.state = { 
            current: 'home',
            last: null
        };
    }

    chooseOption = option => {
        const last = this.state.current;
        this.setState({
            current: option,
            last: last
        });
    }

    render() { 
        const info = data[this.state.current];
        return (
            <div className='content'>
                <div className="text">
                    <div>
                        <p>{info.message}</p>
                    </div>
                </div>
                <div className="options-list">
                    {info.options.map(option => {
                        return <p onClick={this.chooseOption.bind(this, option.destination)} >{option.text}</p>
                    })}
                </div>
            </div>
        );
    }
}
 
export default Content;