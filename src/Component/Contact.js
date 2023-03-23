import React from 'react';
import resume from '../data/Data';
import Heading from './Heading';

const Contact = () => {
  return (
    <>
    <Heading topHeading="contact" />
    {resume.contact.map((item,index) =>{
        return(
            <div className="contact-details"  key={index}>
            <div className='user-selected-icon'>
                {item.icon}
            </div>
                <div>
                <h5 className="text-uppercase m-0">{item.heading}</h5>
                <p className="m-0">{item.title}</p>    
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Contact;