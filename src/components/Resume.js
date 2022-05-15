import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, } from 'react-bootstrap'
import { Button } from 'bootstrap';
import myPDF from '../Resume.pdf';


function Resume() {
    const languages = ["Java Script", "HTML", "CSS" ]
    const languageList = languages.map((language) =>
  <li>{language}</li>
);

    return (
        <div>
            <Card>
                <Card.Body>
                <Card.Title>
                    Carlos Miguel Castillo
                </Card.Title>
                <Card.Text>
                    <h1>Objective</h1>
                    My goal is to have a carrer in web design or Database management. I am constatly adding to my skill set with an ambition to help in all aspects of web application develpment. 
                </Card.Text>
                <Card.Text>
                    <h1>
                        Languages
                    </h1>
                    <ul>
                        {languageList}
                    </ul>
                </Card.Text>
                <Card.Text>
                    <h1>
                       Node.js and React.js Packages Used
                    </h1>
                <ul>
                   <li>React</li>
                   <li>Express</li>
                   <li>Hanglebars</li>
                   <li>MongoDB</li>
                   <li>Mysql</li>
                   <li>Express</li>
                   <li>Apollo Server</li>
                   <li>Bootstrap</li>
                </ul>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <a>Email: ccastillas@gmail.com</a>
              <a href="https://github.com/CarlosCastillo123">
             <img/>
                  </a> 
                  <a href="https://github.com/CarlosCastillo123">
              <img />
                  </a>  
                </Card.Footer>
            </Card>
            <a href={myPDF} download="Resume.pdf"> Download Here </a>
           </div>
    )
} 
export default Resume