import React from 'react'

import "./Home.css"
import Navbar from './components/Navbar';
import ReactTypingEffect from 'react-typing-effect'
import SkillCard from './components/SkillCard';
import c from "./assets/c.png"
import html from "./assets/html.png"
import css from "./assets/css-3.png"
import js from "./assets/js.png"
import react from "./assets/react.png"
import node from "./assets/node.png"
import express from "./assets/express.png"
import mongoDB from "./assets/mongodb.png"
import tailwind from "./assets/tailwind.png"
import redux from "./assets/redux.png"
import git from "./assets/git.png"
import github from "./assets/github.png"
import material from "./assets/materialui.png"
import ProjectCard from './components/ProjectCard';
import background from "./assets/background.jpg"
import profileimg from "./assets/profileimg.jpg"
import Education from './components/Education';
import Contact from './components/Contact';
import {motion} from "framer-motion"
import { fadeIn } from './animation';
function Home() {
  const skills=[{name:"HTML5", src:html},{name:"CSS", src:css},{name:"Javascript", src:js},{name:"Node Js", src:node},{name:"Express Js", src:express},{name:"MongoDB", src:mongoDB},{name:"React Js", src:react},{name:"Redux", src:redux},{name:"Tailwind CSS", src:tailwind},{name:"Material UI", src:material},{name:"Git", src:git},{name:"GitHub", src:github},{name:"C++", src:c}] 

  return (
   <>
   <div className="video-background">
     

      <img className='bg-img' src={background} alt="" />
      <div className='content'>
        

            <Navbar/>
        
<div className='intro'>

<motion.div
variants={fadeIn("right", 0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once:false, amount:0.7}}
className='intro-details'>
  <h1>Hi, I'm <span>Gaurav Saini</span> </h1>
   <h2>
    <ReactTypingEffect
    text={['Passionate Developer.', 'MERN Stack Enthusiast.', 'Frontend Developer']}
    speed={100}
    eraseSpeed={50}
    eraseDelay={500}
    
    
    />
   </h2>
</motion.div>
<div className='intro-img'> <img src={profileimg} alt="" /></div>
</div>


     



      <div className='overview ' id='about'>
        <div
        
        > <motion.p
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        >INTRODUCTION</motion.p>
        <motion.h1
         variants={fadeIn("left",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.5}}
        >Overview.</motion.h1>
        </div>
    <p
    >Passionate MERN Stack Developer with a solid foundation in MongoDB, Express.js, React, and Node.js. Adept at building and maintaining responsive web applications from scratch. Skilled in JavaScript, front-end frameworks, and RESTful APIs. Eager to bring fresh ideas and innovative solutions to a dynamic development team. Excited to leverage my coding skills and collaborate on impactful projects. </p>


      </div>


     <div className='skills'   id='skills'>
 
      

        <motion.h1
      
         variants={fadeIn("down",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        >Skills.</motion.h1>
    

<div className='skills-images '>
  {

  skills.map((skill)=>(
    
  <SkillCard data={skill}/>
  ))
      
  }
      </div>
     </div>


     <div className='projects' id='projects'>

     <div 
    
     className='project-heading'>
      <motion.p
       variants={fadeIn("left",0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
      >MY WORK</motion.p> <motion.h1
      variants={fadeIn("right",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      >Projects.</motion.h1></div>
          <div className='project-container'>
          <ProjectCard name="Ecommerce" details="My e-commerce project, 'Trendy', is built using the MERN stack. It includes features such as payment integration, login/signup, forgot password, and password reset options. It also has an admin dashboard, visible only to admins, where they can create, delete, and update products, change order status, and manage user roles. Users can search for products by name, buy them, and use the cart feature. They can also filter products by category and price."
          live="https://trendy-ecommerce-store-6bvp.onrender.com/" 
          github="https://github.com/GauravSaini144/MERN-Ecommerce-Store"
          />
          <ProjectCard name="Wanderlust" details="Wanderlust is an Airbnb-like website built using MongoDB, Express.js, Node.js, EJS templating, JavaScript, and Bootstrap. Users can log in, sign up, and explore detailed listings of homes, hotels, and villas. They can also list their own properties, including homes, rooms, and villas. Additionally, users have the ability to review listings, sharing their experiences with others. The platform ensures a smooth user experience with a clean interface and responsive design, making it easy for users to find and list properties."
          live="https://wanderlust-z3cu.onrender.com/"
          github="https://github.com/GauravSaini144/WanderLust"
          />
          <ProjectCard name="NoteFlow" details="NoteFlow is a notes taking website created using React.js, allowing users to create notes with titles and perform CRUD operations. These user-created notes are stored in the browser's local storage, ensuring they persist between sessions. Only the user can delete their notes, providing a secure and private note-taking experience."
          
          live="https://noteflow-yr1e.onrender.com/"
          github="https://github.com/GauravSaini144/NoteFlow"
          />
          <ProjectCard name="Todo List" details=" The To-Do List is a web application created using React.js and Redux Toolkit. It enables users to add tasks, update them, and delete them as needed. This user-friendly tool ensures efficient task management, with state persistence managed by Redux, offering a seamless experience."
          live="https://todolistreduxtoolkit-6.onrender.com/"
          github="https://github.com/GauravSaini144/TodoListReduxToolkit"
          />
          
          </div>
     </div>

         
         <div className="education">
            
            <motion.h1
            variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            >
              Education.
            </motion.h1>
          <Education/>
         </div>

         <div className='contact' id='contact'>

            
         <div>
          <motion.p
          variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          >GET IN TOUCH</motion.p>
          <motion.h1
          
          variants={fadeIn("left",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}>Contact.</motion.h1>
         </div>
          <Contact/>
         </div>

    <div className='footer'></div>
______
      </div>
      </div>
     
   </>
  )
}

export default Home;