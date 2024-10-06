import React from 'react'
import "./SkillCard.css"
import {motion} from "framer-motion"
import { fadeIn } from '../animation'
function SkillCard({data}) {
  return (
    <>
    
    <motion.div
    variants={fadeIn("left",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.5}}
    className='skillCard'>
  
  <img src={data.src} alt="" />
    <p>{data.name}</p>

    </motion.div>
    </>
  )
}

export default SkillCard