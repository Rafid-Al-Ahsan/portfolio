import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    fetch('http://localhost:5000/projects')
        .then(response => response.json())
        .then(data => setProjects(data))

    return (
        <div id="project">
            <p className='text-3xl text-center my-5 italic font-bold text-white '>Projects</p>
            <div className='flex w-[90%] m-auto gap-20 '>
                {projects.map(project => <Card key={project.id} project={project}></Card>)}
            </div>
        </div>
    );
};

function Card({ project }) {

    return (
        <div className="card card-compact w-96  bg-base-700 text-white shadow-xl">
            <figure><img src={project.img} alt="Shoes" /></figure>
            <div className="card-body text-center   ">
                <p className="font-bold text-2xl italic">{project.title}</p>
                <p>{project.description}</p>
                <div className="card-actions justify-start  ">
                    <Link to={`projectdetails/${project.id}`} ><button className="btn btn-primary bg-[#7DF9FF] border-0 px-6 mt-5">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Projects;

