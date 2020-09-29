import React, {useEffect, useState} from 'react';
import HomeLayout from "../Layout/HomeLayout";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import '../../css/profile.css'
const exclude = ['voted_elections', 'photo', 'imageUrl']

const Profile = (props) => {
    const [voter, setVoter] = useState(null);
    console.log('Props', props)
    useEffect(() => {
        const id = props.match.params.id
        let selectedVoter = null
        if(props.location.pathname.indexOf('voter-list') >= 0){
            selectedVoter = props.voters.filter(d => d._id === id)
        }else
            selectedVoter = props.candidates.filter(d => d._id === id)
        setVoter(selectedVoter)
    },[])

    return (
        <HomeLayout>
            <div className="voter-profile-container">
                <p>Voter Profile</p>
                {
                   voter && Object.entries(voter[0]).map(d => {
                       return  !exclude.includes(d[0]) ? (<div className="voter-profile">
                               <div className="voter-profile-list key"><span>{d[0] !== '_id' ? d[0] : 'Voter Id'}</span></div>
                               <div className="voter-profile-list value"><span>{d[1]}</span></div>
                              </div>) : null
                   })
                }
            </div>
        </HomeLayout>
    );
};

const mapStateToProps = state => ({
    voters : state.voterStore.voters,
    candidates: state.candidateStore.candidates
});

export default withRouter(connect(mapStateToProps, null)(Profile))