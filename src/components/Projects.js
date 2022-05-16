import React from "react";
// import logo from "src/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'

function Project(props) {

    return (
        <div className="container" style={{  display: "flex", justifyContent: "center", alignContent:'center', flexWrap: "wrap", flexDirection: "row"}}>
            {props.projects.map((project) => (
            <Card style={{color: "#000", width: "18rem", margin: "10px" }}>
            <Card.Img src={project.image}/>
           

            <Card.Body>

            <Card.Title>
             {project.title}   
            </Card.Title>
            <Card.Link>
                <a href={project.github} >Github Repo</a>
            </Card.Link>
            <Card.Link>
                <a href={project.live}>Deployed site</a>
            </Card.Link>

             </Card.Body>


            </Card>
        ))}
        </div>
    )
}
export default Project
