import React from 'react'
import "./ProjectCard.css"
import link from "../assets/link.png"
import social from "../assets/social.png"
function ProjectCard({name, details, live, github}) {
  return (
   <>
   <div className='project-card'>
         
   <div className='project-control'>

         <a href={live} target='_blank'> <img src={link} alt="" /></a>
        <a href={github} target='_blank'><img src={social} alt="" /></a> 
      </div>
         <div className='project-name'>

            <p>{name}</p>

         </div>

         <div className='project-details'>
          <p>
 
{details}
          </p>

         </div>

        

   </div>
   
   </>
  )
}

export default ProjectCard