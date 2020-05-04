import React, {useEffect, useState} from 'react';
import '../../../css/adminProtalStyle/election-list.css'
import {Link} from "react-router-dom";
import moment from 'moment'
import HomeLayout from "../../Layout/HomeLayout";
import {fetchElectionList} from "../../../redux/actions/adminAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const ElectionList = ({
  fetchElectionList,
  electionList,
    role,
   currentVoter,
    history
}) => {
    useEffect(() => {
        fetchElectionList();
    },[]);

    const Wrapper = (p) => role === 'admin' ? <HomeLayout heading="Elections">{p.children}</HomeLayout> :
                           <><p className="election-header">Available Elections</p>{p.children}</>
    const currentDate = moment(moment()).format('DD/MM/YYYY');

    const checkCastVote = (id) => {
        if(currentVoter && currentVoter.voted_elections && currentVoter.voted_elections.includes(id)){
            alert('Not Allowed')
        }else{
            history.push(`/voter/election/${id}`)
        }
    }

    console.log(currentDate)
    return (
            <Wrapper>
                <div className="election-cards-container">
                    {
                        electionList && electionList.map((d, i) => (
                            <div className="election-card">
                                <div className="election-card-heading">
                                    <span>{d.name + ' Election'}</span>
                                </div>
                                <div className="election-card-time">
                                    <span>End Date</span>
                                    <span style={{ fontSize : '14px', marginTop : '5px'}}>{moment(d.end_date).utc().format("DD-MM-YYYY").toString()}</span>
                                </div>
                                <div className="election-status">
                                    {
                                        currentDate === moment(d.end_date).format('DD/MM/YYYY')?
                                                 <span style={{ color : 'red'}}>CLOSED</span>
                                                :<span style={{ color : '#2BBA44' }}>OPEN</span>
                                    }
                                </div>
                                {
                                    currentDate !== moment(d.end_date).format('DD/MM/YYYY') ?
                                        <div className="election-card-see" onClick={() => checkCastVote(d._id)}>
                                                <p style={{ color : '#0000EE'}}>See more</p>
                                        </div>
                                        : null
                                }
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
    )
};


const mapStateToProps = state => ({
    electionList : state.electionStore.electionList,
    role : state.authStore.role,
    currentVoter : state.voterStore.currentVoter,
});


const mapActionToProps = () => {
    return {
        fetchElectionList
    }
}

export default withRouter(connect(mapStateToProps,mapActionToProps())(ElectionList))
