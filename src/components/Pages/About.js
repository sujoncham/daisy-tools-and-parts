import React from 'react';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const About = () => {
    return (
        <div className='p-10'>
            <h1 className='text-3xl text-primary mt-8 mb-20'>About Us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div>
                <h1 className='text-2xl font-bold'>Our Missioni</h1>
                <div className="divider w-56 mt-5 mb-5">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">

                        </path>
                        </svg>
                    </div>
                </div>
                <p>Our mission is to be the leading manufacturer of tools across a broad spectrum of market sectors, growing our business by offering industry leading quality, design innovation and value for money with unprecedented customer service. The Packaging of each category is unique; the attractive multi-colour designs conform to international standards – including bar-coding for customer convenience. Ozar is available at various leading Industrial Tool Distributors, located in all continents. We are increasing our footprints in domestic India market at a war footing pace. We stock the tools inventory for fast and timely delivery.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Quality Policy</h1>
                <div className="divider w-56 mt-5 mb-5">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                    </div>
                </div>
                <p>We have in house production facility and maintain stringent International Standards for Quality, Safety and Accuracy.. All products are evaluated and tested under extreme engineering conditions to meet customer requirements. As a world-class Tool Manufacturing Company, it has been an esteemed participant at all leading fairs and Tools Industry meets of the world. Close contacts with customers and personal visits by experts add more to the customer experience. Exclusive global presence and international exposure make Ozar the true frontruner in adopting the latest technology trends being evolved worldwide. We have our eyes set on being recognized as the Innovator and thought leader of Tools related products and technologies in domestic and global markets.</p>
            </div>
            </div>
            <div className='p-20 mt-10 mb-10'>
                <h1 className='text-3xl text-center'>OUR PROMISE</h1>
                <div className="divider w-56 m-auto mt-10 mb-10">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                </div>
                </div>
                <h1 className='text-center font-bold'>OUR PRODUCT QUALITY, CUSTOMER SERVICE AND COMPANY PERFORMANCE DELIVER THE RESULTS THAT DIFFERENTIATE US FROM OUR COMPETITORS</h1>
            </div>
            <div className='mt-14 mb-14'>
                <h1 className='text-center text-3xl mt-14 mb-10'>LeaderShip Team</h1>
                <div className="divider w-56 m-auto mt-10 mb-10">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div class="card card-side bg-base-100 shadow-xl">
                        <div className='grid grid-cols-1 lg:grid-cols-2 '>
                        <figure><img className='w-56 h-80' src={team1} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tools Jone</h2>
                            <p>CEO, Administration</p>
                            <p>He is one of the pioneer of tools manufacturing in India. As a liberal businessman, expert in enhancing each product segment in local & international market. He devoted a great deal of energy and money to the cause of bringing about reconciliation between Daisy Tools and his partners</p>
                            <div className="card-actions justify-start">
                            <button className="btn btn-sm">See more</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                <figure><img className='w-56 h-80' src={team2} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Toos Smith</h2>
                                    <p>CEO, Sales and Marketing</p>
                                    <p>Experienced Entrepreneur with a demonstrated history of working in the Industrial Tool industry. Strong business development professional skilled in Manufacturing, Business Development, Business Strategy, Sales Management, and Product Development.</p>
                                    <div className="card-actions justify-start">
                                    <button className="btn btn-sm">See more</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;