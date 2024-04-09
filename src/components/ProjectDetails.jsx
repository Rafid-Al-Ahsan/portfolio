import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const projects = useLoaderData();

    return (
        <div>
            <div className='w-[60%] ml-5 mt-5'>
                <p className='text-white text-2xl'>{projects.title}</p><br />
                <p>{projects.description}</p><br />
                <p className='text-white text-2xl'>Features:</p><br />
                {projects.features.map(project => <p key={project.id}>-{project}</p>)}
                <div className='flex gap-5'>
                    <Link to={projects.live} target="_blank"><button className="btn btn-primary bg-[#7DF9FF] border-0 px-6 mt-5">Live Site</button></Link>
                    <Link to={projects.client} target="_blank"><button className="btn btn-primary bg-[#7DF9FF] border-0 px-6 mt-5">Client Side</button></Link >
                    {/* {projects.server && <Link to={projects.server} target="_blank"><button className="btn btn-primary bg-[#7DF9FF] border-0 px-6 mt-5">Server Side</button></Link >} */}
                    {projects.server? <Link to={projects.server} target="_blank"><button className="btn btn-primary bg-[#7DF9FF] border-0 px-6 mt-5">Server Side</button></Link > : <></>}
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;