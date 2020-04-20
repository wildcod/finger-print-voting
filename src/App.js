import React from 'react';
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AddCandidate from './components/AddCandidate'
import AddElection from './components/AddElection'
import AddVoter from './components/AddVoter'
import Result from './components/Result'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Voter from "./components/Voter";
import Election from "./components/Election";
import Candidate from "./components/Candidate";
import VoterList from "./components/VoterList";
import ElectionList from "./components/ElectionList";
import ProtectedRoutes from "./components/protectedRoutes";
import HomeLayout from "./components/HomeLayout";

const App = () => {
  return <>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                {/*<Route exact path="/" render={() => <HomeLayout heading="Home"><Home/></HomeLayout>}/>*/}
                <Route path="/result" render={() => <HomeLayout heading="Result"><Result/></HomeLayout>} />
                <Route path="/election-list" render={() => <HomeLayout heading="Elections"><ElectionList/></HomeLayout>} />
                <Route exact path="/voter" render={() => <Voter/>} />
                <Route path="/voter/election/:id" render={() => <Election/>} />
                <ProtectedRoutes path="/addCandidate" heading="Add Candidate" component={AddCandidate}/>
                <ProtectedRoutes path="/addVoter"  heading="Add Voter" component={AddVoter}/>
                <ProtectedRoutes path="/addElection"  heading="Add Election" component={AddElection} />
                <ProtectedRoutes path="/voter-list" heading="Voters" component={VoterList}/>
                <ProtectedRoutes path="/candidate-list"  heading="Candidates" component={Candidate} />
                <Route component={NotFound} />
              </Switch>
            </Router>
         </>
};

export default App;
