import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import '../css/add-candidate.css'

const formInput = ['First Name', 'Last Name', 'Address', 'Age'];

const AddCandidate = () => {
    return (
        <div className="container">
            <Segment raised >
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='First name'
                            placeholder='First name'
                        />
                        <Form.Input
                            label='Last name'
                            placeholder='Last name'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Address'
                            placeholder='Address'
                        />
                        <Form.Input
                            label='Mobile No'
                            placeholder='Mobile No'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Age'
                            placeholder='Age'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Upload Photo'
                            type='file'
                        />
                        <div className="image-container">

                        </div>
                    </Form.Group>
                    <Button type='submit'
                      className="candidate-btn"
                    >Submit</Button>
                </Form>
            </Segment>
        </div>
    );
};

export default AddCandidate;