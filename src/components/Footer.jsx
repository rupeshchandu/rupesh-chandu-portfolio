import React from 'react'
import {AiOutlineArrowUp,AiFillGithub,AiFillInstagram,AiFillLinkedin,AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Rupesh Chandu</h2>
            <p>Motivation is temporary, but discipline last forever</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
                <a href='https://www.linkedin.com/in/rupesh-chandu-7658901a3/'>
                    <AiFillLinkedin/>
                </a>
                <a href='https://github.com/rupeshchandu'>
                    <AiFillGithub/>
                </a>
                <a href='https://instagram.com/rupesh_chandu'>
                    <AiFillInstagram/>
                </a>
            </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp/></a>
        <p><AiOutlineCopyrightCircle/> {new Date().getFullYear()} All Copy Rights Reserved </p>
    </footer>
  )
}

export default Footer