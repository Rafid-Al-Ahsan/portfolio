import React from 'react';
import rafi from '../assets/rafi.jpeg';

const About = () => {
    return (
        <div className='bg-black'>
            <div className='flex w-[90%] m-auto pt-10 pb-20'>
                <div className='w-[50%] flex justify-center items-center'>
                    <img src={rafi} alt=""  className=' w-60 h-60 rounded-full '/>
                </div>
                <div className='w-[50%] text-white'>
                    <p className='text-4xl  italic font-semibold mb-4'>Rafid Ahsan</p>
                    <p>
                        A passionate junior web developer excited to showcase my skills and projects to the world. I'm driven by my curiosity and dedication to creating impactful web experiences. From crafting clean and responsive designs to diving into the latest technologies, I'm constantly pushing myself to learn and grow in this dynamic field.
                    </p><br />
                    <p>
                        On this site, you'll find a collection of my projects, each one a testament to my creativity, problem-solving abilities, and attention to detail. Whether it's crafting pixel-perfect layouts, optimizing performance, or writing clean and maintainable code, I'm always striving for excellence in everything I do.
                    </p><br />
                    <p>
                        So, take a look around, explore my work, and feel free to reach out if you'd like to collaborate or just chat about all things web development. Let's build something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;