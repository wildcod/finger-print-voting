import React from 'react';
import Login from "./components/AuthComponents/Login";
import NotFound from "./components/NotFound/NotFound";
import AddCandidate from './components/AdminPortal/Candidate/AddCandidate'
import AddElection from './components/AdminPortal/Election/AddElection'
import AddVoter from './components/AdminPortal/Voter/AddVoter'
import Result from './components/Result/Result'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Voter from "./components/VoterPortal";
import Election from "./components/AdminPortal/Election/Election";
import Candidate from "./components/AdminPortal/Candidate/Candidate";
import VoterList from "./components/AdminPortal/Voter/VoterList";
import ElectionList from "./components/AdminPortal/Election/ElectionList";
import ProtectedRoutes from "./components/ProtectedRoutes/protectedRoutes";

const App = () => {
  return <>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/result" component={Result} />
                <Route path="/election-list" component={ElectionList} />
                <Route exact path="/voter" component={Voter} />
                <Route path="/voter/election/:id" component={Election} />
                <ProtectedRoutes path="/addCandidate"  component={AddCandidate}/>
                <ProtectedRoutes path="/addVoter"  component={AddVoter}/>
                <ProtectedRoutes path="/addElection"  component={AddElection} />
                <ProtectedRoutes path="/voter-list"  component={VoterList}/>
                <ProtectedRoutes path="/candidate-list"  component={Candidate} />
                <Route component={NotFound} />
              </Switch>
            </Router>
         </>
};

export default App;
