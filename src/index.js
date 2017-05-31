import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from  'react-router';

class AppInitializer {
  run() {
    render(
      <Router history={browserHistory}>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
        </Route>
        <Redirect from="*" to="/" />
      </Router>
      , document.getElementById('app')
    )
  }
}

new AppInitializer().run();
