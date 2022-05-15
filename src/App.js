import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import { HashRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { render } from '@testing-library/react';
import Navbar2 from './components/Navigation2';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Tabs, Tab} from 'react-bootstrap'
function App() {
  const [currentPage, setCurrentPage] = useState("About")
  const renderPage = () => {
    switch (currentPage) {
    case 'About':
        return <About />
    case 'Contact':
        return <ContactForm />
    case 'Project':
        return <Portfolio />
    case 'Resume':
        return <Resume />
    default: 
        return <About />
}}
const handlePageChange = (page) => setCurrentPage(page)
  return (

    <div className="App">
      
    <Header  renderPage={renderPage} 
    handlePageChange={handlePageChange} currentPage={currentPage}/>
 
    <div style={{ display: 'block', width: 700, padding: 30 }}>
   
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="About">
         <About/>
        </Tab>
        <Tab eventKey="second" title="Resume">
         <Resume/>
        </Tab>
        <Tab eventKey="third" title="Contact">
          <ContactForm/>
        </Tab>
        <Tab eventKey="fourth" title="Portfolio">
          <Portfolio/>
        </Tab>
      </Tabs>
    </div>
  
    <Footer/>

      {/* <HashRouter basename="/">
      <Header/>
      <div>
        <Routes>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={ContactForm} />
          </Routes>

      
      </div>
    </HashRouter>

      <Footer/> */}

    </div>
  );
}

export default App;
