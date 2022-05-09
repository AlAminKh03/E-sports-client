import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div className='blog-container'>
                <h2>Difference between javascript and nodejs</h2>
                <p>JavaScript is a programming language. It is running in any web browser with a proper browser engine.	It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.
                    Utility	Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.	It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</p>
            </div>
            <div className='blog-container'>
                <h2>Differences between sql and nosql databases.</h2>
                <p>SQL databases are relational, NoSQL databases are non-relational.
                    SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
            </div>
            <div className='blog-container'>
                <h2>What is the purpose of jwt and how does it work?</h2>
                <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client like your apps frontend and a server your apps backend.

                    They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography hashing to ensure that the JSON contents also known as JWT claims cannot be altered by the client or a malicious party.</p>
            </div>
        </div>
    );
};

export default Blogs;