import React from 'react';
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container'
import './Style.css';

function About() {
    return (
        <>
            <div id="backgroundImageContainer" className="page-holder bg-cover-about">
                <div className="main-wrapper">
                    <Header title="About" />
                    <Container>
                        <div className="jumbotron about">
                            <h1 className="display-3">About</h1>
                            <img className="about-image" />
                            <hr className="my-4" />
                            <p className="lead">Made by Minerva T. Cuabo, Lavota Carter, Emmanuel Pichardo, and Austin Jacobsen for the Woz-U final project</p>
                            <hr className="my-4" />
                            <p className="lead">Made with React, Spring, and MySQL</p>
                            <p>Images sourced from <a href="https://www.pexels.com/">Pexels.com</a></p>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default About