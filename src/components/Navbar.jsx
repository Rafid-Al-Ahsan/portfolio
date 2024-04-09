import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProject = () => {
        const projectSection = document.getElementById('project');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHome = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const items = <>
        <Link onClick={scrollToHome} className="btn btn-ghost text-white text-md" to='/'>Home</Link>
        <Link onClick={scrollToProject} className="btn btn-ghost text-white text-md" to="/">Projects</Link>
        <Link onClick={scrollToAbout} className="btn btn-ghost text-white text-md" to="/">About Me</Link>
    </>

    return (
        <div className="navbar bg-[#222020]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl italic text-white">Rafid Al Ahsan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;
