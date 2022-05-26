import React from 'react';

// https://blog.logrocket.com/optimizing-performance-react-application/

const Blogs = () => {
    const blog =[
        {"answer":"React অ্যাপ্লিকেশনগুলিতে, ডিফল্টভাবে  একটি খুব দ্রুত UI load  নিশ্চিত করা  হয়ে থাকে  ৷ তবুও , একটি অ্যাপ্লিকেশন-এর কর্মযজ্ঞ বৃদ্ধির সাথে সাথে ডেভেলপাররা কিছু পারফরম্যান্স সমস্যার সম্মুখীন হতে হয় ।"}
    ]
    return (
        <div>
            <h1>Blogs page</h1>
            <div>
                <h1>{blog.answer}</h1>
                <ol>
                    <li>Keeping component state local where necessary</li>
                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React</li>
                    <li>Lazy loading images in React</li>
                </ol>
        
        
        
        
        
            </div>
        </div>
    );
};

export default Blogs;