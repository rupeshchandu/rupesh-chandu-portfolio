import React from 'react';
import { animate, motion} from "framer-motion";
import Typewritter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/dev-ed-wave.png";
import { useRef } from 'react';


const Home = ({ratio}) => {

    const projectcount = useRef(null);

    const animationprojectscount = ()=>{
        animate(0,10,{
            duration : 1,
            onUpdate:(v) => (projectcount.current.textContent = v.toFixed()),
        });
     };

   const animations = {
    h1:{
        initial:{
            x:"-100%",
            opacity : 0,
        },
        whileInView:{
            x:0,
            opacity:1,
        },
        
    },

    // button:{
    //     initial:{
    //         y:"-100%",
    //         opacity : 0,
    //     },
    //     whileInView:{
    //         y:0,
    //         opacity:1,
    //     },
    // },
   };


  return (
    <div id = "home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I Am <br/> Rupesh Chandu 
                </motion.h1>

                <Typewritter
                    options={{
                        strings : ["A Developer","A Designer","A Creator"],
                        autoStart : true,
                        loop : true,
                        cursor : "",
                        wrapperClassName : "typewriterpara",
                    }}
                />

                <div>
                    <a href="mailto:lvrupeshch@gmail.com">Hire Me </a>
                    <a href="#work">Projects <BsArrowUpRight /></a>
                </div>


                <aside>
                    <article>
                        <p>
                            + 
                            {
                                ratio < 2 && <motion.span whileInView={animationprojectscount} ref = {projectcount} ></motion.span>
                            }
                        </p>
                        <span>Projects Done</span>
                    </article>

                    <article data-special>
                        <p>Contact</p>
                        <span>lvrupeshch@gmail.com</span>
                    </article>
                </aside>

            </div>
        </section>

        <section>
            <img src = {me} alt = "Rupesh Chandu"/>
        </section>

        <BsChevronDown/>
    </div>
  )
}

export default Home 