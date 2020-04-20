import React from 'react';
import {Card, Image} from "semantic-ui-react";
import '../css/voter-list.css'
import candidatePhoto1 from "../static/arvind-kejriwal.jpeg";

const VoterList = () => {
    return (
        <Card.Group className="voter-container">
            <Card className="voter-card">
                <Image
                    wrapped
                    src={candidatePhoto1}
                    size="small"
                    className="voter-card-image"
                />
                <Card.Content>
                    <Card.Header>Arvind Kejriwal</Card.Header>
                    <Card.Description>Aam Aadmi Party</Card.Description>
                </Card.Content>
            </Card>

        </Card.Group>
    );
};

export default VoterList;