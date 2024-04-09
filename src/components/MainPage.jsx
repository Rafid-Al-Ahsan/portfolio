import React from 'react';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';

const MainPage = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;