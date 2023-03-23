import React from 'react';
import Achievement from './Achievement';
import DownloadeBtn from './DownloadeBtn';
import Education from './Education';
import Heading from './Heading';
import Skill from './Skill';

const Profile = () => {
  let para ="create user-friendly web pages by utilising markup languages such as HTML. Upkeep and enhancement of website Develop mobile-based features.Keep up with evolving technology.";
  return (
    <>
          <div className='col-md-12 col-lg-8'>
             <div className='mb-3'>
             <Heading topHeading="Profile"  />
            <p className='m-0 text-capitalize'>{para.slice(0, 250)}</p>
             </div>
            <div className='row'>
            <Achievement />
            <Education />
            <Skill />
            <DownloadeBtn />
            </div>
          </div>
    </>
  )
}

export default Profile;