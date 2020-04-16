import React from 'react';
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import HomeLayout from "./components/HomeLayout";
import AddCandidate from './components/AddCandidate'
import AddElection from './components/AddElection'
import AddVoter from './components/AddVoter'
import Result from './components/Result'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Voter from "./components/Voter";
import Election from "./components/Election";
import Candidate from "./components/Candidate";
import VoterList from "./components/VoterList";

const App = () => {
  return <>
            <Router>
              <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" render={() => <HomeLayout heading="Home"><Home/></HomeLayout>}/>
                <Route path="/addCandidate" render={() => <HomeLayout heading="Add Candidate"><AddCandidate/></HomeLayout>} />
                <Route path="/addVoter" render={() => <HomeLayout heading="Add Voter"><AddVoter/></HomeLayout>} />
                <Route path="/addElection" render={() => <HomeLayout heading="Add Election"><AddElection/></HomeLayout>} />
                <Route path="/result" render={() => <HomeLayout heading="Result"><Result/></HomeLayout>} />
                <Route path="/candidate-list" render={() => <HomeLayout heading="Candidates"><Candidate/></HomeLayout>} />
                <Route path="/voter-list" render={() => <HomeLayout heading="Voters"><VoterList/></HomeLayout>} />
                <Route exact path="/voter" render={() => <Voter/>} />
                <Route path="/voter/election/:id" render={() => <Election/>} />
                <Route component={NotFound} />
              </Switch>
            </Router>
         </>
};

export default App;
