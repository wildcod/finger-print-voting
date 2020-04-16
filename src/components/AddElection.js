import React, {useState} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'

const options = [
    { key: 'one', text: '1', value: 1 },
    { key: 'two', text: '2', value: 2 },
    { key: 'three', text: '3', value: 3 },
];

const AddElection = () => {
    const [ candiates, setCandiates] = useState(0);
    return (
        <div className="container">
            <Segment raised >
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Election Name'
                            placeholder='Election name'
                        />
                        <Form.Input
                            label='Election Id'
                            placeholder='Election Id'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select
                            label='No of Candidate'
                            options={options}
                            placeholder='No of Candidate'
                            onChange={(e,data) => setCandiates(data.value)}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='End Date'
                            placeholder='End Date'
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

export default AddElection;