import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className='flex w-[100%] gap-20 my-10'>

                <div className='w-[50%]'>
                    <div className="max-w-md mx-auto p-6 bg-[#242020] rounded-lg shadow-md ">
                        <h1 className="text-2xl font-bold mb-4 text-[#fff]">Like my work! Contact Me</h1>
                        <form>
                            <div className='flex gap-5'>
                                <div className="mb-4">
                                    <label className="block text-[#fff]">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value=""
                                        onChange=""
                                        className="mt-1 p-2 w-full border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-[#fff]">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value=""
                                        onChange=""
                                        className="mt-1 p-2 w-full border rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fff]">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value=""
                                    onChange=""
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fff]">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value=""
                                    onChange=""
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fff]">Message</label>
                                <textarea
                                    name="message"
                                    value=""
                                    onChange=""
                                    className="mt-1 p-2 w-full border rounded-md"
                                    rows="4"
                                    placeholder='message'
                                    required
                                ></textarea>
                            </div>
                            {/* <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                Send Message
                            </button> */}
                            <button className="btn btn-primary bg-[#7DF9FF] border-0 px-6 mt-5">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className='mt-32'>

                {/* facebook contact */}
                <a href='https://www.linkedin.com/in/rafid-al-ahsan/' target="_blank">
                    <div className='flex gap-4'>
                        <BsLinkedin size={47} className="text-[#0077b5]" />
                        <div>
                            <p className='text-white text-lg'>LinkedIn</p>
                            <p className='text-white text-md'>Rafid Al Ahsan</p>
                        </div>
                        
                    </div>
                </a><br /><br />


                {/* github contact */}
                <a href='https://github.com/Rafid-Al-Ahsan' target="_blank">
                    <div className='flex gap-4'>
                        <FaGithub size={47} />
                        <div>
                            <p className='text-white text-lg'>Github</p>
                            <p className='text-white text-md'>https://github.com/Rafid-Al-Ahsan</p>
                        </div>
                        
                    </div>
                </a><br /><br />
                
                {/* What's app */}
                    <div className='flex gap-4'>
                        <IoLogoWhatsapp size={47} className="text-[#075E54]" />
                        <div>
                            <p className='text-white text-lg'>WhatsApp</p>
                            <p className='text-white text-md'>01534305266</p>
                        </div>
                        
                    </div><br /><br />


                {/* Gmail */}
                    <div className='flex gap-4'>
                        <BiLogoGmail size={47} className="text-[#BB001B] bg-white" />
                        <div>
                            <p className='text-white text-lg'>gmail</p>
                            <p className='text-white text-md'>rafidahsan9@gmail.com</p>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="bg-gray-800 text-white text-center py-4">
                <p>&copy; {currentYear} Rafid Al Ahsan. All Rights Reserved.</p>
            </div>

        </div>


    );

};

export default Footer;