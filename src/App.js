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
import Group from './components/Group';
import Contact from './components/Contact';



function App() {

  return (
    <Router>
      <Header />
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
          <Route exact path="/group">
            <Group />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
