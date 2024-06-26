import React from 'react';
import { Outlet } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;