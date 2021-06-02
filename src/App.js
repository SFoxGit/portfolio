import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import About from './components/About';
import FrontEnd from './components/Frontend';
import BackEnd from './components/Backend';
import API from './components/API';
import ReactPage from './components/React';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Work from './components/Work';
import Particles from "react-particles-js";
import Python from './components/Python';



function App() {

  return (
    <Router>
      <Header />
      <div className="main-content">
        <div className="parts">
          <Particles
            // height={window.outerHeight}
            className="particles"
            params={{
              "particles": {
                "number": {
                  "value": 15,
                  "density": {
                    "enable": true,
                    "value_area": 1800
                  }
                },
                "line_linked": {
                  "enable": false
                },
                "move": {
                  "speed": 1,
                  "out_mode": "out"
                },
                "shape": {
                  "type": [
                    "image",
                    "image",
                    "image",
                  ],
                  "image": [
                    {
                      "src": "/images/nodejs.png",
                      "height": 20,
                      "width": 20
                    },
                    {
                      "src": "/images/jslogo.png",
                      "height": 20,
                      "width": 20
                    },
                    {
                      "src": "/images/reactlogo.png",
                      "height": 20,
                      "width": 20
                    }
                  ]
                },
                "color": {
                  "value": "#CCC"
                },
                "size": {
                  "value": 30,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                  }
                }
              },
              "retina_detect": false
            }} />
        </div>
        <div className="container">

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/frontend">
              <FrontEnd />
            </Route>
            <Route exact path="/backend">
              <BackEnd />
            </Route>
            <Route exact path="/api">
              <API />
            </Route>
            <Route exact path="/react">
              <ReactPage />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/python">
              <Python />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );

}

export default App;
