// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </App>;

export default AppRoutes;