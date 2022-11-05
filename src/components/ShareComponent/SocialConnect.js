import React from 'react';
import { FaFacebook, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SocialConnect = () => {
    return (
        <div>
            <div className='flex gap-5 mt-5'>
                <Link as={Link} to='https://twitter.com/' className="link link-hover"><FaTwitter size={25} color={'#e09f11'}></FaTwitter></Link>
                <Link to='https://facebook.com/' className="link link-hover"><FaFacebook size={25} color={'#e09f11'}></FaFacebook> </Link>
                <Link to='https://www.google.com/gmail/' className="link link-hover"><FaGooglePlusG size={25} color={'#e09f11'}></FaGooglePlusG></Link>
                <Link to='https://youtube.com/' className="link link-hover"><FaYoutube size={25} color={'#e09f11'}></FaYoutube></Link>
                <Link to='https://linkedin.com/' className="link link-hover"><FaLinkedinIn size={25} color={'#e09f11'}></FaLinkedinIn></Link>
            </div>

            <div className="mt-10">
                <h1 className="text-3xl text-blue-500 font-bold">Our Address</h1>
                <address className="mt-5">
                <p>Kamal Atartuk Avenue, <br /> Banani, Dhaka-1213</p>
                <p>Phone : +012455663</p>
                <p>Website : www.daisytools.com</p>
                </address>
            </div>
        </div>
    );
};

export default SocialConnect;