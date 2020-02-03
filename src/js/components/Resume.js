import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import Job from './Job';

class Resume extends Component {
    render() {
        const career = data.career;
        return (
            <div className="resume">
                <div className="resume-title"><h1><Fade bottom cascade>Résumé.</Fade></h1></div>
                <div className='resume-content'>
                    {career.map(job => (
                        <Job value={job}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Resume;