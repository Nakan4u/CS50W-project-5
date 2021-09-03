import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import './styles/App.css';
import './styles/layout.css';

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import "./Constants";

function App() {
  return (
    <>
    <Router>
    <NavBar /> 
      <div className="page-layout-container">
      <div className="grid-col" />
        <div className="grid-col">
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
      <div className="grid-col" />
    </Router> 
    </>  
  );
}

export default App;
