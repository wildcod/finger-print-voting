import React from 'react';
import CastVote from "./CastVote";
import '../css/voter.css'
import {withRouter} from "react-router";

const Voter = props => {
    const logoutHandler = () => {
        window.localStorage.removeItem('userData');
        props.history.push('/');
    };
    return (
        <div>
            <div className="voter-header" >
                <span>Voter</span>
                <span style={{ cursor : 'pointer'}} onClick={logoutHandler}>Logout</span>
            </div>
            <CastVote/>
        </div>
    );
};

export default withRouter(Voter);