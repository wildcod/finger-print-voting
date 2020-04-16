import React from 'react';
import {Card, Image} from "semantic-ui-react";
import '../css/voter-list.css'
import candidatePhoto1 from "../static/arvind-kejriwal.jpeg";

const VoterList = () => {
    return (
        <Card.Group className="voter-container">
            <Card>
                <Image
                    wrapped ui={false}
                    src={candidatePhoto1}
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