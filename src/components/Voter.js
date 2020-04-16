import React from 'react';
import CastVote from "./CastVote";
import '../css/voter.css'

const Voter = () => {
    return (
        <div>
            <div className="voter-header" >
                <span>Voter</span>
                <span style={{ cursor : 'pointer'}}>Logout</span>
            </div>
            <CastVote/>
        </div>
    );
};

export default Voter;