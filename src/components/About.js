import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap"

function About() {
    return (
    <div style={{display: "flex", justifyContent: "center", alignContent:'center'}}>     
 <Card style={{ width: '18rem', display: "flex", justifyContent: 'center', alignContent:'center' }}>
 <Card.Img variant="top" src="logo192.png" />

  <Card.Body>
<Card></Card>
    <Card.Title>About me</Card.Title>
    <Card.Text>
     Hello thank you for visiting my website! I am an aspiring web developer from San Diego. Coding is becoming a passion of mine, the utility of coding is what intrigues me the most. Currently I am developing web applications using Node.js. My goal to pursue a career in web based design or server side data management. Please downlaod my resume on the resume tab or leave your contact info with a brief message and i'll get back to you!
    </Card.Text>
  
  </Card.Body>
 </Card>

    </div>
    )
}
export default About