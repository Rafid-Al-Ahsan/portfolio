import React, { useState } from 'react';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    fetch('projects.json')
        .then(response => response.json())
        .then(data => setProjects(data))

    return (
        <div>
            <p className='text-3xl text-center my-5 italic font-bold text-white '>Projects</p>
            <div className='flex w-[90%] m-auto gap-20 '>
                {projects.map(project => <Card key={project.id} project={project}></Card>)}
            </div>
        </div>
    );
};

function Card({ project }) {

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={project.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start  ">
                    <button className="btn btn-primary px-6">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Projects;

