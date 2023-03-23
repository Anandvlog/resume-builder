import React from 'react';
import userImg from "../Assest/img/anand-img.jpeg";
import Contact from './Contact';
import Heading from './Heading';

const UserProfile = () => {
  let userPro = "Front-end developer";
  return (
          <div className='col-md-12 col-lg-4 custom-border'>
            <div className='mb-3 user-profile-contact'>
                <img src={userImg} alt="user-img" className='img-fluid' />
                <Heading topHeading="Anand chauhan"  />
                <p className='m-0 text-uppercase'>{userPro}</p>
            </div>
               <div className='col-md-12'>
                 <Contact />
               </div>
            </div>
  )
}

export default UserProfile;