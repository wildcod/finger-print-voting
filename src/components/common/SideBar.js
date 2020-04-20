import React from 'react';
import voterLogo from '../../static/voter.png'
import '../../css/sidebar.css'
import { withRouter } from "react-router";

const SideBar = (props) => {
    console.log('6',props);
    const logoutHandler = () => {
         window.localStorage.removeItem('userData');
         props.history.push('/');
    };
    return (
        <div className="sidebar-container">
             <div className="sidebar-header">
                 <img src={voterLogo} width="90"/>
             </div>
             <div className="sidebar-list">
                 <div className="list"><span onClick={() => props.history.push('/addCandidate')}>Add Candidate</span></div>
                 <div className="list"> <span onClick={() => props.history.push('/addVoter')}>Add Voter</span></div>
                 <div className="list"><span onClick={() => props.history.push('/addElection')}>Add Election</span></div>
                 <div className="list"><span onClick={() => props.history.push('/result')}>Result</span></div>
                 <div className="list"><span onClick={logoutHandler}>Logout</span></div>
             </div>
        </div>
    );
};

export default withRouter(SideBar);