import React from 'react';
import '../../css/voterPortalStyle/voter.css'
import {logout} from "../../redux/actions/authAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const VoterLayout = ({ history, logout, children }) => {

    const logoutHandler = async() => {
        await logout();
        history.push('/');
    };
    return (
        <div>
            <div className="voter-header" >
                <span>Voter</span>
                <span style={{ cursor : 'pointer'}} onClick={() => history.push('/result')}>Result</span>
                <span style={{ cursor : 'pointer'}} onClick={logoutHandler}>Logout</span>
            </div>
            {children}
        </div>
    );
};

const mapActionToProps = () => {
    return {
        logout
    }
}

export default withRouter(connect(null,mapActionToProps())(VoterLayout))