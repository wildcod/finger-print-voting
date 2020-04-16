import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import '../css/election.css'
import candidatePhoto1 from "../static/arvind-kejriwal.jpeg";

const Election = () => {
    const { id } = useParams();
    const [ active , setActive ] = useState(false);
    return (
        <div className="election-container">
            <div className="election--card">
                <div className="election-voter-image">

                </div>
                <div className="election-scanner">
                    Scan Finger
                </div>
                <div className="election-voter-info">
                    {
                        voterData.map(d => (
                            <div className="election-row">
                                <div className="election-key">{d.key}</div>
                                <div className="election-value">{d.default}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="election--card">
                <p>Candidates</p>
                <Card.Group>
                    <Card>
                        <Image
                            wrapped ui={false}
                            src={candidatePhoto1}
                        />
                        <Card.Content>

                            <Card.Header>Arvind Kejriwal</Card.Header>
                            <Card.Description>Aam Aadmi Party</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Cast Vote
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        </div>
    );
};

export default Election;

const voterData = [
    {
       key : "Name",
       value : "Sahil Kanojia",
        default : ''
     },
    {
        key : "Voter Id",
        value : "CVDGSFTE34",
        default : ''
    },
    {
        key : "Age",
        value : "20",
        default : ''
    },
    {
        key : "Address",
        value : "chanakaya puri",
        default : ''
    },
    {
        key : "Mobile",
        value : "90876543322",
        default : ''
    }
];