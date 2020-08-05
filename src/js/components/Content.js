import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data.js';

class Content extends Component {
    constructor() {
        super();
        this.state = data;
    }

    render() { 
        return (
            <div className='content'>
                <div className="about-text">
                    <div>
                        <p>{this.state.abouttext}</p>
                    </div>
                </div>
                <div style={{border: "1px solid", height: 'fit-content'}}>
                    <p style={{border: "1px solid", margin: "0"}}>I wanna do this</p>
                    <p style={{border: "1px solid", margin: "0"}}>I could do that</p>
                </div>
            </div>
        );
    }
}
 
export default Content;