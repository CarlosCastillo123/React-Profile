import React from "react";
import Project from "./Projects";


const projects = [

  {
    id: 0,
    title: "JATE",
    image: "./photos/jate.png",
    github: "https://github.com/CarlosCastillo123/Jate",
    live: "https://boiling-coast-76367.herokuapp.com/",
  },
  {
    id: 1,
    title: "Express-Note-Taker",
    image: "./photos/note.png",
    github: "https://github.com/CarlosCastillo123/Express_Note_Taker",
    live: "https://express-note-taker123456.herokuapp.com/",
  },
  {
    id: 2,
    title: "Slither-In",
    image: "./photos/slitherin.png",
    github: "https://github.com/CarlosCastillo123/slither-in",
    live: "https://slither-in.herokuapp.com/"
  },
  {
    id: 3,
    title: "National Park Search",
    image: "./photos/park.png",
    github: "https://github.com/CarlosCastillo123/National-Park-Project",
    live: "https://seyaryu.github.io/National-Park-Project/",
  },
  {
    id: 4,
    title: "First Portfolio",
    image: "./photos/profile.png",
    github: "https://github.com/CarlosCastillo123/CMCProjects",
    live: "https://carloscastillo123.github.io/CMCProjects/",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    image: "./photos/weather.png",
    github: "https://github.com/CarlosCastillo123/Weather-Dashboard",
    live: "https://carloscastillo123.github.io/Weather-Dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium"></p>
      

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;