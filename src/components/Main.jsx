import React from 'react';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Main;