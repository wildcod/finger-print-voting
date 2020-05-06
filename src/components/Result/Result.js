import React, {useEffect} from 'react';
import HomeLayout from "../Layout/HomeLayout";
import { fetchEndElection } from "../../redux/actions/adminAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import moment from "moment";
import {Link} from "react-router-dom";
import VoterLayout from "../Layout/VoterLayout";

const Result = ({ fetchEndElection , elections, role}) => {
    useEffect(() => {
        fetchEndElection()
    },[]);
    const Wrapper = (p) => role === 'admin' ? <HomeLayout heading="Elections">{p.children}</HomeLayout> :
         <VoterLayout>{p.children}</VoterLayout>
    return (
        <Wrapper>
            <div className="election-cards-container">
                {
                    elections && elections.length ? elections.map((d, i) => (
                        <div className="election-card">
                            <div className="election-card-heading">
                                <span>{d.name + ' Election'}</span>
                            </div>
                            <div className="election-card-time">
                                <span>End Date</span>
                                <span style={{ fontSize : '14px', marginTop : '5px'}}>{moment(d.end_date).utc().format("DD-MM-YYYY").toString()}</span>
                            </div>
                            <div className="election-status">
                                  <span style={{ color : 'red'}}>CLOSED</span>
                            </div>
                            <div className="election-card-see">
                                <Link to={`/result/${d._id}`} >
                                    <p>See Result</p>
                                </Link>
                            </div>
                        </div>
                    ))
                        :
                        <p style={{marginTop : '20px'}}>No Result</p>
                }
            </div>
        </Wrapper>
    );
};

const mapStateToProps = state => ({
    elections: state.electionStore.closedElections,
    role: state.authStore.role
});

const mapActionToProps = () => {
    return {
        fetchEndElection
    }
}


export default withRouter(connect(mapStateToProps, mapActionToProps())(Result))