import React from 'react'
import {motion} from "framer-motion";
import {DiPython} from "react-icons/di";
import {FaDatabase} from "react-icons/fa";
import {AiFillIeCircle} from "react-icons/ai";

const Services = () => {

    const animations = {
        box1:{
            whileInView:{
                x:0,
                y:0,
                opacity:1,
            },
            initial:{
                opacity:0,
                x:"-100%"
            },
        },
        box23: {
            whileInView:{
                x:0,
                y:0,
                opacity:1,
            },
            initial:{
                opacity:0,
                y:"-100%"
            },
        },
        
        box4: {
            whileInView :{
                x:0,
                y:0,
                opacity:1,
            },
            initial:{
                opacity:0,
                x:"100%"
            }
        }
    }
  return (
    <div id = "services" >
        <h2>Services</h2>
        <section>
            <motion.div className='servicebox1'{...animations.box1} >
                <h3>1+</h3>
                <p>Years Experience</p>
            </motion.div>
            <motion.div {...animations.box23}>
                <AiFillIeCircle/>
                <span>Web Development</span>
            </motion.div>
            <motion.div {...animations.box23} transition={{delay : 0.2}} >
                <DiPython/>
                <span>Python Programming</span>
            </motion.div>
            <motion.div className='servicebox4' {...animations.box4} >
                <FaDatabase/>
                <span>Database Management</span>
            </motion.div>
        </section>
    </div>
  )
}



export default Services