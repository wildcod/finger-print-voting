import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import '../../../css/adminProtalStyle/election.css'
import { fetchVoterDetails, castVote } from "../../../redux/actions/voterAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import LoaderContainer from "../../common/Loader";
const notInclude = ['_id', 'finger_print', '__v', 'photo', 'voted_elections']

const Election = ({
      username,
      fetchVoterDetails,
      electionList,
      castVote,
      currentVoter,
      voterVerifiedStatus,
      votedElections,
      history
}) => {
    const { id } = useParams();
    const [ finger , setFinger ] = useState(null);
    const [processing, setProcessing] = useState(false)
    const candidates = electionList.filter(f => f._id === id)[0].candidates
    const changeHandler = (e) => {
        setFinger(e.target.files[0]);
    }
    const submitHandler = async () => {
        setProcessing(true)
        document.body.classList.add('election-loader');
        const formInputData = new FormData();
        formInputData.set('username', username);
        formInputData.append('finger_print', finger);
       const res = await fetchVoterDetails(formInputData);
       setProcessing(false)
        document.body.classList.remove('election-loader');
       if(res.message === 'verified'){
           alert('Finger Print Match')
       }else{
           alert('Not Match')
       }
    }

    const castVoteHandler = async(candidateId) => {
        const res = castVote(candidateId,id,currentVoter._id);
        if(res){
            history.push('/voter')
        }else{
            alert('Something Went Wrong')
        }
    }


    return (
        <>
        <div className="election-container">
                    <div className="election-card-1">
                    <div className="election-voter-image">
                        <input type="file" name="finger_print" onChange={changeHandler}/>
                    </div>
                    <div className="election-scanner" onClick={submitHandler}>
                        Scan Finger
                    </div>
                    <div className="election-voter-info">
                        {
                            currentVoter && Object.entries(currentVoter).map(d => {

                                return notInclude.includes(d[0]) ?
                                    null
                                    : <div className="election-row">
                                        <div className="election-key">{d[0]}</div>
                                        <div className="election-value">{d[1]}</div>
                                    </div>
                            })
                        }
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
                                    src={`/${d.imageUrl.split('/')[1]}`}
                                    size="small"
                                    className="election-candidate-card-image"
                                />
                                <Card.Content>
                                    <Card.Header>{d.name}</Card.Header>
                                    <Card.Description>{d.party_name}</Card.Description>
                                    <Button
                                        color='green'
                                        onClick={() => castVoteHandler(d._id)}
                                        disabled={!voterVerifiedStatus}
                                    >
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
            {
                processing && <LoaderContainer/>
            }
        </>
    );
};

const mapStateToProps = state => ({
    username : state.authStore.username,
    electionList : state.electionStore.electionList,
    currentVoter : state.voterStore.currentVoter,
    voterVerifiedStatus : state.voterStore.voterVerifiedStatus
});

const mapActionToProps = () => {
    return {
        fetchVoterDetails,
        castVote
    }
}


export default withRouter(connect(mapStateToProps, mapActionToProps())(Election))
