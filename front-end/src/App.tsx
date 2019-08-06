import React from 'react';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import store from './Store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {
          /* Insert routes here using <Route exact path = "" component = {}> 
            This should be the only switch in the application.
          */
          }
          <Route exact path = "/" component={Landing} />   
          <Route exact path = "/login" component={Login} />   

        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;