import React, { Component } from 'react';
import data from '../data.js';

class Content extends Component {
    constructor() {
        super();
        this.state = data;
    }

    render() { 
        return (
            <div className='content'>
                <div className="text">
                    <div>
                        <p>{this.state.abouttext}</p>
                    </div>
                </div>
                <div className="options-list">
                    <p>I wanna do this</p>
                    <p>I could do that</p>
                </div>
            </div>
        );
    }
}
 
export default Content;