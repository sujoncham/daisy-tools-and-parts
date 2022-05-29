import React from 'react';
import { FaFacebook, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const dateYear = new Date();
    const year = dateYear.getFullYear();
    return (
        <footer className="p-10 bg-neutral text-neutral-content">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 border-b-2 pb-5'>
                <div className='text-center grid m-auto'>
                    <span className="footer-title text-yellow-500 font-bold">Services</span> 
                    <Link to='/branding' className="link link-hover">Branding</Link>
                    <Link to='/design' className="link link-hover">Design</Link>
                    <Link to='/marketing' className="link link-hover">Marketing</Link>
                    <Link to='/adverticement' className="link link-hover">Advertisement</Link>
                </div> 
                <div className='text-center grid m-auto'>
                    <span className="footer-title text-yellow-500 font-bold">Company</span> 
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                    <Link to='/' className="link link-hover">New Arival</Link>
                </div> 
                <div className='text-center grid m-auto'>
                    <span className="footer-title text-yellow-500 font-bold">Legal</span> 
                    <Link to='/terms' className="link link-hover">Terms of use</Link>
                    <Link to='/privacy' className="link link-hover">Privacy policy</Link>
                    <Link to='/cookie' className="link link-hover">Cookie policy</Link>
                    <Link to='/policy' className="link link-hover">Company policy</Link>
                </div>
            </div>
            <div className='place-items-center grid mt-5'>
                <div className='flex gap-5'>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                    <Link to='/' className="link link-hover">New Arival</Link>
                </div>
                <div>
                    <p>&copy;{year} <Link to='/' className='text-blue-500'>Daisy Tool and Parts, LLC.</Link> All Rights Reserved</p>
                </div>
                <div className='flex gap-5 mt-5'>
                    <Link as={Link} to='https://twitter.com/' className="link link-hover"><FaTwitter></FaTwitter></Link>
                    <Link to='https://facebook.com/' className="link link-hover"><FaFacebook></FaFacebook> </Link>
                    <Link to='https://www.google.com/gmail/' className="link link-hover"><FaGooglePlusG></FaGooglePlusG></Link>
                    <Link to='https://youtube.com/' className="link link-hover"><FaYoutube></FaYoutube></Link>
                    <Link to='https://linkedin.com/' className="link link-hover"><FaLinkedinIn></FaLinkedinIn></Link>
                </div>

            </div>
        </footer>
    );
};

export default Footer;