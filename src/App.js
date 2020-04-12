import React from 'react';
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return <>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </Router>
         </>
};

export default App;
