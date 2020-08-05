import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";
import data from '../data.js';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <header>
                    <h4>
                        <Fade bottom cascade>{data.name}</Fade></h4>
                </header>
            </div>
        );
    }
}
 
export default Header;