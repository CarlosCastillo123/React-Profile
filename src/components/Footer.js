import React from "react"
import icon from "../../src/logo.svg"
import { GoMarkGithub} from "../../node_modules/react-icons/go";
import { BsLinkedin } from "../../node_modules/react-icons/bs"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from "react-bootstrap"
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
             <Image thumbnail src={GoMarkGithub}/>
                  </a> 
            </div> 
                  <div>     
                  <a href="https://github.com/CarlosCastillo123">
              <Image style={{width: '30px', }} thumbnail src={icon}/>
                  </a> 
                  </div> 
            </footer>
        </div>
    )
}

export default Footer