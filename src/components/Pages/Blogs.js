import React from 'react';

const Blogs = () => {
 
    return (
        <div>
            <h1 className='w-full text-3xl border-b-4 mb-5 p-10'>Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-10'>
                <div className='q-1'>
                    <div>
                    <h1 className='text-2xl font-bold'>Q.1. How will you improve the performance of a React Application?</h1>
                    </div>
                    <div>
                        <span className='font-bold'>Ans. :</span>
                        <h1>React অ্যাপ্লিকেশনগুলিতে, ডিফল্টভাবে একটি খুব দ্রুত UI load নিশ্চিত করা হয়ে থাকে ৷ তবুও, একটি অ্যাপ্লিকেশন-এর কর্মযজ্ঞ বৃদ্ধির সাথে সাথে ডেভেলপাররা কিছু পারফরম্যান্স সমস্যার সম্মুখীন হতে হয় ।</h1>
                        <ol>
                            <li>1. Keeping component state local where necessary</li>
                            <li>2. Memoizing React components to prevent unnecessary re-renders</li>
                            <li>3. Code-splitting in React using dynamic import()</li>
                            <li>4. Windowing or list virtualization in React</li>
                            <li>5. Lazy loading images in React</li>
                        </ol>
                    </div>
                </div>
                <div className='q-2'>
                    <div>
                    <h1 className='text-2xl font-bold'>Q.2. What are the different ways to manage a state in a React application?</h1>
                    </div>
                    <div>
                        <span className='font-bold'>Ans. :</span>
                        <h1>React অ্যাপগুলিতে আপনাকে সঠিকভাবে পরিচালনা করতে চারটি প্রধান ধরণের state রয়েছে :</h1>
                        <ol>
                            <li>1. Local state</li>
                            <li>2. Global state</li>
                            <li>3. Server state</li>
                            <li>4. URL state</li>
                        </ol>
                    </div>
                </div>
                <div className='q-3'>
                    <div>
                    <h1 className='text-2xl font-bold'>Q.3. How does prototypical inheritance work?</h1>
                    </div>
                    <div>
                        <span className='font-bold'>Ans. :</span>
                    <h1>জাভাস্ক্রিপ্ট একটি প্রোটোটাইপ-ভিত্তিক, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ভাষা। ES6 আপডেটের পরে, জাভাস্ক্রিপ্ট "prototypal inheritance" এর জন্য অনুমতি দিয়েছে, যার অর্থ objects এবং methods গুলি ভাগ করা, extended এবং copied করা যেতে পারে।</h1>
                    <h1>অবজেক্টের মধ্যে ভাগ করা কাঠামোর (data field), behavior (ফাংশন/method), এবং state (data values) এর সহজ inheritance তৈরি করে।</h1>
                    </div>
                </div>
                <div className='q-4'>
                    <div>
                    <h1 className='text-2xl font-bold'>Q.4. Why you do not set the state directly in React.?</h1>
                    </div>
                    <div>
                        <span className='font-bold'>Ans. :</span>
                    <h1>নিম্নলিখিত কারণগুলির কারণে কখনই সরাসরি state আপডেট করা উচিত নয়:</h1>
                    <ol>
                        <li>1. যদি এটি সরাসরি আপডেট করেন, তাহলে setState() কে পরে call করলে আপডেটটি বদলে যেতে পারে</li>
                        <li>2. যখন state-কে সরাসরি আপডেট করেন, তখন এটি অবিলম্বে this.state পরিবর্তন করে না। পরিবর্তে, এটি একটি pending অবস্থার রূপান্তর তৈরি করে এবং এই পদ্ধতিতে call করার পরে এটি access করা শুধুমাত্র বর্তমান মান ফিরিয়ে দেবে</li>
                        <li>3. যদি এটি সরাসরি আপডেট করেন, সমস্ত components-এর state নিয়ন্ত্রণ হারাবেন.</li>
                        
                    </ol>
                    </div>
                </div>

                <div className='q-5'>
                    <div>
                    <h1 className='text-2xl font-bold'>Q.5. What is a unit test? Why should write unit tests?</h1>
                    </div>
                    <div>
                        <span className='font-bold'>Ans. :</span>
                    <h1>UNIT TESTING হল এক ধরনের সফটওয়্যার টেস্টিং যেখানে একটি সফটওয়্যারের পৃথক ইউনিট বা উপাদান পরীক্ষা করা হয়। উদ্দেশ্য হল সফ্টওয়্যার কোডের প্রতিটি ইউনিট প্রত্যাশিত হিসাবে কাজ করে তা যাচাই করা। ডেভেলপারদের দ্বারা একটি অ্যাপ্লিকেশনের development-এর (coding phase) সময় ইউনিট পরীক্ষা করা হয়। ইউনিট টেস্ট কোডের একটি বিভাগকে বিচ্ছিন্ন করে এবং এর সঠিকতা, কার্যকারিতা যাচাই করে। একটি ইউনিট একটি পৃথক function, method, procedure, module বা object হতে পারে।</h1>
                    <h1>ইউনিট টেস্টিং গুরুত্বপূর্ণ, কারণ সফ্টওয়্যার ডেভেলপাররা কখনও কখনও ন্যূনতম ইউনিট পরীক্ষা করে সময় বাঁচানোর চেষ্টা করে এবং বলা হয়ে থাকে, অনুপযুক্ত ইউনিট পরীক্ষার ফলে সিস্টেম টেস্টিং, ইন্টিগ্রেশন টেস্টিং এবং এমনকি অ্যাপ্লিকেশন তৈরি হওয়ার পরে বিটা টেস্টিং-এর সময় উচ্চ খরচের ত্রুটি সংশোধন করতে হয় - যা কাম্য নয় । প্রাথমিক development-এ যদি সঠিক ইউনিট পরীক্ষা করা হয়, তবে এটি শেষ পর্যন্ত সময় এবং অর্থ সাশ্রয় করে।</h1>
                    </div>
                </div>
                <div className='q-6'>
                    <div>
                    <h1 className='text-2xl font-bold'>Q.6. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name??</h1>
                    </div>
                    <div>
                        <span className='font-bold'>Ans. :</span>
                    <h1>{}</h1>
                 
                    </div>
                </div>
        
        
            </div>
        </div>
    );
};

export default Blogs;