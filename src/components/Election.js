import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import '../css/election.css'
import candidatePhoto1 from "../static/arvind-kejriwal.jpeg";
import axios from "axios";
import api from "../util/api";

const Election = () => {
    const { id } = useParams();
    const [ active , setActive ] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        try{
            const getElection = async () => {
                const res = await axios.get(api('getElection', id));
                setData(res.data.election);
                console.log('Data 18',res);
            };
            getElection();
        }catch (error) {
            console.log(error);
            throw error
        }
    },[]);

    return (
        <div className="election-container">
            <div className="election-card-1">
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
            <div className="election-card-1 election-card-2">
                <p>Candidates</p>
                <Card.Group className="election-candidate-container">
                    {
                       data && data.candidates && data.candidates.length > 0 && (
                            data.candidates.map(d => (
                                <Card className="election-candidate-card" key={d._id}>
                                    <Image
                                        wrapped
                                        src={d.photo}
                                        size="small"
                                        className="election-candidate-card-image"
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
            </div>
        </div>
    );
};

export default React.memo(Election);

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