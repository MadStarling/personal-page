import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import data from '../data.js';

class Header extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
        <div>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
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