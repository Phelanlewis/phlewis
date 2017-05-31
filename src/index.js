import React        from 'react';
import { render }   from 'react-dom';
import App          from './components/App.js';
import Home         from './components/Home.js';
import DataActions  from './actions/DataActions.js';

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from  'react-router';

class AppInitializer {

    buildRoutes(data) {
      return data.pages.map((page, i) => {
        return (
          <Route
            component={ Home }
            key={ page.id }
            path={`/${page.slug}`}
          />
        )
      })
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router history={browserHistory}>
                    <Route path="/" component={ App } >
                        <IndexRoute component={ Home } />
                    </Route>
                    <Redirect from="*" to="/" />
                </Router>

                , document.getElementById('app')
            );
        });
    }
}


new AppInitializer().run();
