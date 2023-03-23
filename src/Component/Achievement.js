import React from 'react'
import Heading from './Heading';
import resume from '../data/Data';

const Achievement = () => {
  return (
     <>
      <div className='col-md-12'>
        <Heading topHeading="experience" />
        {resume.experience.map((exItem,index) =>{
          return(
        <div className="user-experience" key={index}>
        <div className='user-experience-year'>
          <span className='first-year'>{exItem.year[0]}</span>
          <span className='last-year'>{exItem.year[1]}</span>
        </div>
           <div>
                <h5 className='text-capitalize m-0'>{exItem.company}</h5>
                <p className='m-0'>{exItem.role}</p>
           </div>
        </div>

          )
        })

        }
      </div>
     </>
  )
}

export default Achievement;   