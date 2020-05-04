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
import Profile from "./components/common/Profile";
import ResultProfile from "./components/Result/ResultProfile";

const App = () => {
  return <>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/result" component={Result} />
                <Route path="/election-list" component={ElectionList} />
                <Route exact path="/voter" component={Voter} />
                <Route path="/voter/election/:id" component={Election} />
                <ProtectedRoutes path="/addCandidate"  component={AddCandidate}/>
                <ProtectedRoutes path="/addVoter"  component={AddVoter}/>
                <ProtectedRoutes path="/addElection"  component={AddElection} />
                <ProtectedRoutes exact path="/voter-list"  component={VoterList}/>
                <ProtectedRoutes path="/voter-list/profile/:id"  component={Profile}/>
                <ProtectedRoutes path="/candidate-list"  component={Candidate} />
                <ProtectedRoutes path="/result/:id"  component={ResultProfile} />
                <Route component={NotFound} />
              </Switch>
            </Router>
         </>
};

export default App;
