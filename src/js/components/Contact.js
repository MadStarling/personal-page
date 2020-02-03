import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends Component {
    render() { 
        return (
            <div className="contact">
                <h1>
                    <Fade bottom cascade> Contact.</Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <h1>Want to talk about<br></br>
                            <span className='amazing-color'>the future?</span></h1>
                            <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                        <ul>
                            <li><a target='_blank' rel="noopener noreferrer" 
                                href={data.social.url}>{data.social.name}</a></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        );
    }
}
 
export default Contact;