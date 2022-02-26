import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./components/routes/Route";
import AuthenRoute from './components/routes/AuthenRoute';
import PublicRoute from './components/routes/PublicRoute';

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, idx) => (
          <PublicRoute
            path={route.path}
            component={route.component}
            key={idx}
            exact
          />
        ))}
        {authRoutes.map((route, idx) => (
          <AuthenRoute
            path={route.path}
            component={route.component}
            key={idx}
            exact
          />
        ))}
        <Redirect to="/page-404" />
      </Switch>
    </Router>
  );
}

export default App;