import React from 'react'
import "./Contact.css"
import mail from "../assets/mail.png"
import linkedin from "../assets/linkedin.png"
import telephone from "../assets/telephone.png"

import github from "../assets/github.png"
import resume from "../assets/Resume.pdf"
function Contact() {
  return (
   <>
   
   <div className='contact-main'>

    
  <div>
        <a href="mailto:gauravsaini1442004@gmail.com"><img src={mail} alt="" /></a>
        
        <a href="tel:+9887688930"><img src={telephone} alt="" />
        </a>
              <a href="https://in.linkedin.com/in/gaurav-saini-09b441230" target='_blank'> <img src={linkedin} alt="" /></a>
       <a href="https://github.com/GauravSaini144" target='_blank'> <img src={github} alt="" /></a>
       </div>

       <a href={resume} download="GauravSainiResume.pdf">

       <button>Download Resume</button></a>
   </div>

   
   </>
  )
}

export default Contact