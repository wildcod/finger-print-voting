import React from 'react';
import { Card, Image} from "semantic-ui-react";
import '../css/candidate.css'
import candidatePhoto1 from "../static/arvind-kejriwal.jpeg";

const Candidate = () => {
    return (
        <Card.Group className="candidate-container">
            <Card className="candidate-card">
                <Image
                    wrapped
                    src={candidatePhoto1}
                    size="small"
                    className="candidate-card-image"
                />
                <Card.Content>
                    <Card.Header>Arvind Kejriwal</Card.Header>
                    <Card.Description>Aam Aadmi Party</Card.Description>
                </Card.Content>
            </Card>

        </Card.Group>
    );
};

export default Candidate;