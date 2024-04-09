import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='w-100 bg-bluek py-5'>

            <div className='w-5/6 m-auto'>
                <p className='font-bold text-4xl text-white text-center '>Want to get in touch</p>
                <div className='flex gap-52 mt-10'>
                    <p className='flex text-white text-lg'><IoLogoWhatsapp className='text-4xl mr-2' />01534305266</p>
                    <p className='flex text-white text-lg'><BiLogoGmail className='text-4xl mr-2' />rafidahsan9@gmail.com</p>
                    <Link className='flex text-white text-lg' to="https://www.facebook.com/profile.php?id=100008379432319"><FaFacebook className='text-4xl mr-2'/>RafidAhsan</Link>
                    <Link className='flex text-white text-lg' to="https://www.linkedin.com/in/rafid-al-ahsan/"><BsLinkedin className='text-4xl mr-2'/>RafidAlAhsan</Link>

                </div>

            </div>

            <div className='w-5/6 m-auto  md:flex-row flex-col py-5'>
                <div>
                    <p>&copy; 2024 All Rights Reseved by Rafid Al Ahsan</p>
                </div>
            </div>


        </div>
    );

};

export default Footer;