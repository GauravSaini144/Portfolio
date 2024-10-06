import React, { useEffect, useState } from 'react'
import "./Navbar.css"
function Navbar() {
  const [scroll, setScroll]=useState(false);

  useEffect(()=>{
    const handelScroll=()=>{
      if(window.scrollY>50){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    }

    window.addEventListener('scroll', handelScroll);
    return()=>{
   window.removeEventListener('scroll',handelScroll);
    }
  },[]);
  
  return (

    
   <>
   <div className={scroll?'navbar scroll':'navbar'}>

    <ul>
    <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#contact"><li>Contact</li></a>
        <a href="#about"><li>About</li></a>
    </ul>
   </div>
   
   </>
  )
}

export default Navbar