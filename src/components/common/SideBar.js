import React from 'react';
import voterLogo from '../../static/voter.png'
import '../../css/sidebar.css'
import { withRouter } from "react-router";
import {logout} from "../../redux/actions/authAction";
import {connect} from "react-redux";

const SideBar = ({ logout, history }) => {
    const logoutHandler = async () => {
         await logout();
         history.push('/');
    };

    const navigationHandler = (routeName) => {
        history.push(routeName)
    }

    return (
        <div className="sidebar-container">
             <div className="sidebar-header">
                 <img src={voterLogo} width="90"/>
             </div>
             <div className="sidebar-list">
                 <div className="list"><span onClick={() => navigationHandler('/addCandidate')}>Add Candidate</span></div>
                 <div className="list"> <span onClick={() => navigationHandler('/addVoter')}>Add Voter</span></div>
                 <div className="list"><span onClick={() => navigationHandler('/addElection')}>Add Election</span></div>
                 <div className="list"><span onClick={() => navigationHandler('/result')}>Result</span></div>
                 <div className="list"><span onClick={logoutHandler}>Logout</span></div>
             </div>
        </div>
    );
};

const mapActionToProps = () => {
    return {
       logout
    }
}

export default withRouter(connect(null,mapActionToProps())(SideBar))