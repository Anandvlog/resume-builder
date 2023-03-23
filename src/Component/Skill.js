import React from 'react'
import Heading from './Heading'
import resume from '../data/Data'

const Skill = () => {
  return (
    <div>
        <Heading topHeading="skill" />
        {resume.skills.map((itemSkill,index) =>{
            return(
                <span key={index} className="user-skills">{itemSkill}</span>
            )
        })}
    </div>
  )
}

export default Skill