import React from 'react';
import {useParams} from "react-router-dom";
import Table from "../common/Table";
import '../../css/table.css'
import {withRouter} from "react-router";
import {connect} from "react-redux";

const ResultProfile = ({ elections }) => {
    const { id } = useParams();
    const currentElection = elections.filter(e => e._id === id)[0]
    return (
        <div className="table-container">
            <p className="table-header">Result</p>
          <Table election={currentElection}/>
        </div>
    );
};

const mapStateToProps = state => ({
    elections: state.electionStore.closedElections
});


export default withRouter(connect(mapStateToProps,null)(ResultProfile))