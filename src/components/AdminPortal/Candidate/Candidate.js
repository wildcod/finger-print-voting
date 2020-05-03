import React, {useEffect, useState} from 'react';
import { Card, Image} from "semantic-ui-react";
import '../../../css/adminProtalStyle/candidate.css'
import HomeLayout from "../../Layout/HomeLayout";
import {fetchCandidates} from "../../../redux/actions/adminAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const Candidate = ({ candidates, fetchCandidates }) => {
    useEffect(() => {
        fetchCandidates();
    },)
    return (
        <HomeLayout heading="Candidates">
            <Card.Group className="candidate-container">
                {
                    candidates && candidates.length > 0 && (
                        candidates.map(d => (
                            <Card className="candidate-card" key={d._id}>
                                <Image
                                    wrapped
                                    src={d.photo}
                                    size="small"
                                    className="candidate-card-image"
                                />
                                <Card.Content>
                                    <Card.Header>{d.name}</Card.Header>
                                    <Card.Description>{d.party_name}</Card.Description>
                                </Card.Content>
                            </Card>
                        ))
                    )
                }
            </Card.Group>
        </HomeLayout>
    );
};

const mapStateToProps = state => ({
    candidates : state.candidateStore.candidates,
});


const mapActionToProps = () => {
    return {
        fetchCandidates
    }
}

export default withRouter(connect(mapStateToProps,mapActionToProps())(Candidate))