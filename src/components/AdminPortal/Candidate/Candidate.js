import React, {useEffect, useState} from 'react';
import { Card, Image} from "semantic-ui-react";
import '../../../css/adminProtalStyle/candidate.css'
import HomeLayout from "../../Layout/HomeLayout";
import {fetchCandidates} from "../../../redux/actions/adminAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {capitalizeText} from "../../../util";

const Candidate = ({ candidates, fetchCandidates, history }) => {
    useEffect(() => {
        fetchCandidates();
    },[])
    const navigationHandler = (id) => {
        history.push(`/candidate-list/profile/${id}`)
    }
    return (
        <HomeLayout heading="Candidates">
            <Card.Group className="candidate-container">
                {
                    candidates && candidates.length > 0 ? (
                        candidates.map(d => (
                            <Card className="candidate-card" key={d._id} onClick={() => navigationHandler(d._id)}>
                                <Image
                                    wrapped
                                    src={d.imageUrl.split('/')[1]}
                                    size="small"
                                    className="candidate-card-image"
                                />
                                <Card.Content>
                                    <Card.Header>{capitalizeText(d.name)}</Card.Header>
                                    <Card.Description>{d.party_name}</Card.Description>
                                </Card.Content>
                            </Card>
                        ))
                    ) : <p style={{ textAlign: 'center', width: '100%'}}>No candidates available</p>
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