import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import './App.css';

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./Constants";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/bio" component={Bio} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} exact/>
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>    
  );
}

export default App;
