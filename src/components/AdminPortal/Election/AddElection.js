import React, {useEffect, useState} from 'react';
import {Segment, Form, Button, TransitionablePortal, Header} from 'semantic-ui-react'
import HomeLayout from "../../Layout/HomeLayout";
import {fetchCandidates, addElection } from "../../../redux/actions/adminAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {clearErrors} from "../../../redux/actions/errorAction";
import LoaderContainer from "../../common/Loader";

const options = [
    { key: 'one', text: '1', value: 1 },
    { key: 'two', text: '2', value: 2 },
    { key: 'three', text: '3', value: 3 },
    { key: 'four', text: '4', value: 4 },
];

const AddElection = ({ fetchCandidates, requestingAddElection, candidates, addElection }) => {
    const [noOfCandidates, setNoOfCandidates] = useState(0);
    const [electionName, setElectionName] = useState('');
    const [electionId, setElectionId] = useState('');
    const [endDate, setEndDate] = useState('');
    const [candidatesName, setCandidatesName] = useState([]);

    useEffect(() => {
        if(candidates && candidates.length) return
        fetchCandidates();
    },[candidates]);

    let candidateOptions = null
    if(candidates && candidates.length){
         candidateOptions = candidates.map(d => ({ key : d._id , text : d.name, value : d._id}));
      }

    const handleSubmit = async (e) => {
           e.preventDefault();
           const electionData = {
               name : electionName,
               end_date : endDate ,
               candidates : candidatesName,
               electionId : electionId
           };
        const res = await addElection(electionData);
        if(res){
            alert('Election Added Successfully')
        }
        else{
            alert('Something went wrong')
        }
    };
    return (
        <>
        <HomeLayout heading="Add Election">
        <div className="container">
            <Segment raised >
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Election Name'
                            placeholder='Election name'
                            value={electionName}
                            required
                            onChange={(e) => setElectionName(e.target.value)}
                        />
                        <Form.Input
                            label='Election Id'
                            placeholder='Election Id'
                            value={electionId}
                            required
                            onChange={(e) => setElectionId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select
                            label='No of Candidate'
                            options={options}
                            placeholder='No of Candidate'
                            required
                            onChange={(e,data) => setNoOfCandidates(data.value)}
                        />
                    </Form.Group>
                    {
                        new Array(noOfCandidates).fill(1).map((d,i) => (
                            <Form.Group widths='equal'>
                                <Form.Select
                                    label={`Candidate ${i+1}`}
                                    options={candidateOptions}
                                    placeholder='No of Candidate'
                                    required
                                    onChange={(e,data) => {
                                        if(!candidatesName.includes( data.value)) {
                                            setCandidatesName([...candidatesName, data.value])
                                        }
                                    }}
                                />
                            </Form.Group>
                        ))
                    }
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='End Date'
                            placeholder='End Date'
                            value={endDate}
                            required
                            onChange={(e) => setEndDate(e.target.value)}
                            type="date"
                        />
                    </Form.Group>
                    <Button type='submit'
                            className="candidate-btn"
                    >Submit</Button>
                </Form>
            </Segment>
        </div>
        </HomeLayout>
            {
                requestingAddElection && <LoaderContainer/>
            }
        </>
    );
};

const mapStateToProps = state => ({
    error : state.errorStore,
    candidates: state.candidateStore.candidates,
    requestingAddElection : state.electionStore.requestingAddElection
});

const mapActionToProps = () => {
    return {
        fetchCandidates,
        addElection
    }
}


export default withRouter(connect(mapStateToProps, mapActionToProps())(AddElection))