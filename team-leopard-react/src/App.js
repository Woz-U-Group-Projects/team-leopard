import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'; 
import './App.css';
import Home from './screens/Home.js';
import Register from './screens/Register.js';
import NotFound from './screens/NotFound.js';
import About from './screens/About.js';
import Recipes from './screens/Recipes.js';
import Profile from './screens/Profile.js';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
