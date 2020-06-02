import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data.js';

class About extends Component {
    render() { 
        return (
            <div className='about'>
                <div className="about-text">
                    <div>
                        <h1><Fade bottom cascade>About.</Fade></h1>
                        <Fade bottom>
                                <p>{data.abouttext}</p>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;