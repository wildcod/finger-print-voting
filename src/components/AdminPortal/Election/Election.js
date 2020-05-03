import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import '../../../css/adminProtalStyle/election.css'
import axios from "axios";
import api from '../../../util/api';
import { fetchVoterDetails } from "../../../redux/actions/voterAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";
const notInclude = ['_id', 'finger_print', '__v', 'photo']

const Election = ({ username, fetchVoterDetails, electionList }) => {
    const { id } = useParams();
    const [ finger , setFinger ] = useState(null);
    const candidates = electionList.filter(f => f._id === id)[0].candidates
    console.log(candidates)
    const changeHandler = (e) => {
        setFinger(e.target.files[0]);
    }
    const submitHandler = async () => {
        const formInputData = new FormData();
        console.log(username, finger)
        formInputData.set('username', username);
        formInputData.append('finger_print', finger);
        await fetchVoterDetails(formInputData);
    }

    const castVote = async(candidateId) => {
        try{
            const res = await axios.post(api('castVote'),{candidateId : candidateId, id : id});
            console.log('Response',res);
            window.localStorage.setItem('cast','true');
        }catch(e){
           alert('Something Went wrong')
        }
    }

    return (
        <div className="election-container">
            <div className="election-card-1">
                <div className="election-voter-image">
                    <input type="file" name="finger_print" onChange={changeHandler}/>
                </div>
                <div className="election-scanner" onClick={submitHandler}>
                    Scan Finger
                </div>
                <div className="election-voter-info">
                    {/*{*/}
                    {/*   userData && Object.entries(userData).map(d => {*/}

                    {/*     return notInclude.includes(d[0]) ?*/}
                    {/*           null*/}
                    {/*      : <div className="election-row">*/}
                    {/*           <div className="election-key">{d[0]}</div>*/}
                    {/*           <div className="election-value">{d[1]}</div>*/}
                    {/*       </div>*/}
                    {/*   })*/}
                    {/*}*/}
                </div>
            </div>
            <div className="election-card-1 election-card-2">
                <p>Candidates</p>
                <Card.Group className="election-candidate-container">
                    {
                       candidates && candidates.length > 0 && (
                            candidates.map(d => (
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
                                        <Button basic color='green' onClick={() => castVote(d._id)}>
                                            Cast Vote
                                    </Button>
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

const mapStateToProps = state => ({
    username : state.authStore.username,
    electionList : state.electionStore.electionList
});

const mapActionToProps = () => {
    return {
        fetchVoterDetails
    }
}


export default withRouter(connect(mapStateToProps, mapActionToProps())(Election))
