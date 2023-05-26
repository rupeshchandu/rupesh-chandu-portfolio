import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuopen ,setmenuopen}) => {
  return (

    <>
      <nav>
        <Navcontent setmenuopen={setmenuopen} />
      
      </nav>

      <button className='navbtn' onClick={()=>setmenuopen(!menuopen)}>
            <AiOutlineMenu/>
      </button>

    </>

  )
}


export const Navcontent = ({setmenuopen}) =>(

    <>
      <h2>Rupesh Chandu</h2>

      <div>
          <a href = "#home" onClick={()=>setmenuopen(false)}>Home</a>
          <a href = "#work" onClick={()=>setmenuopen(false)}>Work</a>
          <a href = "#timeline" onClick={()=>setmenuopen(false)}>Experience</a>
          <a href = "#services" onClick={()=>setmenuopen(false)}>Services</a>
          <a href = "#contact" onClick={()=>setmenuopen(false)}>Contact</a>
      </div>
      <a href = "mailto:lvrupeshch@gmail.com">
          <button>
              Email
          </button>
      </a>
    </>
);

export default Header