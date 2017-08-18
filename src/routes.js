// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './components/App';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </App>;

export default AppRoutes;