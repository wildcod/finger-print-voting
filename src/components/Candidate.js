import React, {useEffect, useState} from 'react';
import { Card, Image} from "semantic-ui-react";
import '../css/candidate.css'
import candidatePhoto1 from "../static/arvind-kejriwal.jpeg";
import axios from "axios";
import api from "../util/api";

const Candidate = () => {

    const [ candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try{
                const res = await axios.get(api('getCandidates'));
                console.log(res);
                setCandidates(res.data.candidates);
            }catch (e) {
                 console.log(e)
            }
        };
        fetchCandidates();
    },[]);

    return (
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
    );
};

export default Candidate;