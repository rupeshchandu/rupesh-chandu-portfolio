import React from 'react'
import {Navcontent} from "./Header"

const Headerphone = ({menuopen ,setmenuopen}) => {
    return (
      <div className={`navphone ${menuopen ? "navphonecomes" : ""}`}>
          <Navcontent setmenuopen={setmenuopen} />
      </div>
    )
}
export default Headerphone