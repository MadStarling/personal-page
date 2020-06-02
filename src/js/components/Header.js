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
            <nav>
                <ul>
                    <li>
                        <Link
                            className='link'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Résumé</Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}
 
export default Header;