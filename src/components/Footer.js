import React from "react"
import icon from "../../src/logo.svg"
import { GoMarkGithub} from "../../node_modules/react-icons/go";
import { BsLinkedin } from "../../node_modules/react-icons/bs"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from "react-bootstrap"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const styles = {
    display: 'flex',
    justifiyContent: 'spaceBetween'
}
function Footer() {

    return (
        <div >
            <footer style={{display: "flex", justifyContent:"center", alignContent: "end"}}>
            <div >
              <a href="https://github.com/CarlosCastillo123">
              <FontAwesomeIcon icon={faGithub}/>
                  </a> 
            </div> 
                  <div>     
                  <a href="https://www.linkedin.com/in/carlos-castillo-112598227/">
                 <FontAwesomeIcon icon={faLinkedin}/>
                  </a> 
                  </div> 
            </footer>
        </div>
    )
}

export default Footer