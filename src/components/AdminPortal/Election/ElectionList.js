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
  electionList
}) => {
    useEffect(() => {
        fetchElectionList();
    },[]);
    return (
        <HomeLayout heading="Elections">
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
                            <div className="election-card-see">
                                <Link to={`/voter/election/${d._id}`} >
                                    <p>See more</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </HomeLayout>
    );
};


const mapStateToProps = state => ({
    electionList : state.electionStore.electionList,
});


const mapActionToProps = () => {
    return {
        fetchElectionList
    }
}

export default withRouter(connect(mapStateToProps,mapActionToProps())(ElectionList))
