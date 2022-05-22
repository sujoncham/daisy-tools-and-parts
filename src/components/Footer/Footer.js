import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span> 
                <Link to='/d' className="link link-hover">Branding</Link>
                <Link to='/a' className="link link-hover">Design</Link>
                <Link to='/d' className="link link-hover">Marketing</Link>
                <Link to='/a' className="link link-hover">Advertisement</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link to='/a' className="link link-hover">About us</Link>
                <Link to='/d' className="link link-hover">Contact</Link>
                <Link to='/f' className="link link-hover">Jobs</Link>
                <Link to='/c' className="link link-hover">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link to='/c' className="link link-hover">Terms of use</Link>
                <Link to='/d' className="link link-hover">Privacy policy</Link>
                <Link to='/s' className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;