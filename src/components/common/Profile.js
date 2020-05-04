import React, {useEffect, useState} from 'react';
import HomeLayout from "../Layout/HomeLayout";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import '../../css/profile.css'

const Profile = (props) => {

    const [voter, setVoter] = useState(null);

    useEffect(() => {
        const id = props.match.params.id
        const selectedVoter = props.voters.filter(d => d._id === id)
        setVoter(selectedVoter)
    },[])

    return (
        <HomeLayout>
            <div className="voter-profile-container">
                <p>Voter Profile</p>
                {
                   voter && Object.entries(voter[0]).map(d => (
                        <div className="voter-profile">
                            <div className="voter-profile-list key"><span>{d[0]}</span></div>
                            <div className="voter-profile-list value"><span>{d[1]}</span></div>
                        </div>
                    ))
                }
            </div>
        </HomeLayout>
    );
};

const mapStateToProps = state => ({
    voters : state.voterStore.voters,
});

export default withRouter(connect(mapStateToProps, null)(Profile))