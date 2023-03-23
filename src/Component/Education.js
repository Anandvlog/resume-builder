import React from 'react';
import Heading from './Heading';
import resume from '../data/Data';

const Education = () => {
  return (
    <>
    <div className='mb-3'>
       <Heading topHeading="Education" />
         {resume.education.map((edItem,index) =>{
            return(
                <div className="user-education" key={index}>
                <div className='' >
                    <span>{edItem.year[0]}</span>-
                    <span>{edItem.year[1]}</span>
                </div>
                    <p className='m-0'>{edItem.Ename}</p> 
                </div>
            )})}
    </div>
    </>
  )
}

export default Education;