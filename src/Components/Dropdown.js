import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

const Dropdown = () => {
  const [open , setopen] = useState(false)
  return (
    
    <div className="dropdown" id="dropdown">
        <button onClick={()=>{setopen(!open)}} className="dropbtn"><FontAwesomeIcon className="icon-gray" icon={faBars} size="2x" /></button>
        
        {open && <div className="dropdown-content" id="dropdown-c">
            <Link onClick={()=>{setopen(!open)}} className="link" to="/">Home</Link>
            <Link onClick={()=>{setopen(!open)}} className="link" to="/about">About</Link>
            <Link onClick={()=>{setopen(!open)}} className="link" to="/contact">Contact</Link>
        </div>  
        }
        </div>

    
  )
}

export default Dropdown