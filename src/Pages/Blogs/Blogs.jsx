import React from 'react';
import TitleHooks from '../../TitleHooks/TitleHooks';

const Blogs = () => {
    TitleHooks('blogs')
    return (
        <div className='my-10 '>
            <h1 className='text-3xl font-bold my-4'>Some important Question and answer.</h1>
            <div>
                <div className='my-2'>
                    <h3 className='text-xl font-bold'>Difference between SQL and NoSQL?</h3>
                    <p>Answer: SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className='my-2'>
                    <h3 className='text-xl font-bold'>What is JWT, and how does it work?</h3>
                    <p>Answer: What is JWT JSON Web Token? JSON Web Token JWT is an open standard RFC 7519 for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity ProviderIdP.</p>
                </div>
                <div className='my-2'>
                    <h3 className='text-xl font-bold'>What is the difference between javascript and NodeJS?</h3>
                    <p>Answer:JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                </div>
                <div className='my-2'>
                    <h3 className='text-xl font-bold'>How does NodeJS handle multiple requests at the same time?</h3>
                    <p>Answer:How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;