import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Dropdown = () => {
  return (
    
    <div className="dropdown">
        <button className="dropbtn"><FontAwesomeIcon className="icon-gray" icon={faBars} size="2x" /></button>
        <div className="dropdown-content">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
        </div>
    </div>
    
  )
}

export default Dropdown