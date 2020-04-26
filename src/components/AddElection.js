import React, {useEffect, useState} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import axios from "axios";
import api from "../util/api";

const options = [
    { key: 'one', text: '1', value: 1 },
    { key: 'two', text: '2', value: 2 },
    { key: 'three', text: '3', value: 3 },
];

const AddElection = () => {
    const [noOfCandidates, setNoOfCandidates] = useState(0);
    const [electionName, setElectionName] = useState('');
    const [electionId, setElectionId] = useState('');
    const [endDate, setEndDate] = useState('');
    const [candidatesName, setCandidatesName] = useState([]);
    const [ candidates, setCandidates] = useState(null);
    const  [ candidateOptions, setCandidateOptions] = useState(null);

    useEffect(() => {
        const fetchCandidates = async () => {
            try{
                const res = await axios.get(api('getCandidates'));
                console.log(res);
                setCandidates(res.data.candidates);
                const newCandidateOptions = res.data.candidates.map(d => (
                    { key : d._id , text : d.name, value : d._id}
                ));
                setCandidateOptions(newCandidateOptions);
            }catch (e) {
                console.log(e)
            }
        };
        fetchCandidates();
    },[]);

    const handleSubmit = async (e) => {
           e.preventDefault();
           try{
               const electionData = {
                   name : electionName,
                   end_date : endDate ,
                   candidates : candidatesName,
                   electionId : electionId
               };
               const res = await axios.post(api('addElection'), { data : electionData})
               console.log('Data 48',res);
               alert("Election Created Successfully")
           }catch (error) {
                console.log(error);
                throw error
           }
    };

    console.log('39',candidatesName);

    return (
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
    );
};

export default React.memo(AddElection);