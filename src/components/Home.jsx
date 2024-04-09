import React from 'react';
import bgImg from '../assets/background.png';
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {

    const scrollToProject = () => {
        const projectSection = document.getElementById('project');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const backgroungImage = {

        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',

    };

    return (
        <div id="home">
            <div className='relative flex justify-center items-center h-screen'>
                <img src={bgImg} style={backgroungImage} alt="" />
                <div className='text-center absolute'>
                    <p className='font-bold italic text-4xl mb-4 text-white'>Hey there! Welcome to my portfolio website</p>
                    <p className='font-bold italic text-2xl mb-4 text-white'>I am <span className='italic text-[#7DF9FF]'>Rafid,</span> A junior web developer</p>
                    <a onClick={scrollToProject}><button className="btn btn-accent bg-[#7DF9FF]">View Projects <FaArrowDown /></button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;