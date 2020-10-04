import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Formation from './pages/Formation';
import Experience from './pages/Experience';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return ( 
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/formations" component={Formation} />
          <Route path="/experiences" component={Experience} />
          <Route path="/competences" component={Knowledges} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
