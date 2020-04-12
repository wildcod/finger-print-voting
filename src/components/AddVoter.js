import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import '../css/add-candidate.css'

const formInput = ['First Name', 'Last Name', 'Address', 'Age'];

const AddVoter = () => {
    return (
        <div className="container">
            <Segment raised >
                <Form className="candidate-form">
                    {
                        formInput.map(d => (
                            <Form.Field key={d}>
                                <label>{d}</label>
                                <input placeholder={d} />
                            </Form.Field>
                        ))
                    }
                    <Form.Field>
                        <label>Upload Photo</label>
                        <input type="file" />
                    </Form.Field>
                    <Button type='submit'
                            className="candidate-btn"
                    >Submit</Button>
                </Form>
            </Segment>
        </div>
    );
};

export default AddVoter;