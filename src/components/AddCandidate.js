import React, {useState} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import '../css/add-candidate.css'

const AddCandidate = () => {
    const [imagePath , setImagePath ] = useState(null);
    const [formData , setFormData ] = useState({
        firstName : '',
        lastName : '',
        address : '',
        mobile : '',
        age : '',
        file : ''
    });
    console.log('image',imagePath);

    const handleImagePath = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file,reader);
        reader.onloadend = () => {
            setImagePath(reader.result)
            setFormData({
                ...formData,
                file
            })
        };
        reader.readAsDataURL(file)
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const error = {
            first_name: formData.firstName.length > 0 ? '' : 'Please enter first name',
            last_name: formData.lastName.length > 0 ? '' : 'Please enter last name',
            address: formData.address.length > 4 ? '' : 'Please enter address',
            mobile : formData.mobile.length == 10 ? '' : 'Please enter a valid mobile no'
        };

        console.log(formData);
    };

    return (
        <div className="container">
            <Segment raised >
                <Form onSubmit={submitHandler}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='First name'
                            name="firstName"
                            value={formData.firstName}
                            onChange={inputChangeHandler}
                            placeholder='First name'
                        />
                        <Form.Input
                            label='Last name'
                            name="lastName"
                            value={formData.lastName}
                            onChange={inputChangeHandler}
                            placeholder='Last name'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Address'
                            name="address"
                            value={formData.address}
                            onChange={inputChangeHandler}
                            placeholder='Address'
                        />
                        <Form.Input
                            label='Mobile No'
                            name="mobile"
                            value={formData.mobile}
                            onChange={inputChangeHandler}
                            placeholder='Mobile No'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Age'
                            name="age"
                            value={formData.age}
                            onChange={inputChangeHandler}
                            placeholder='Age'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Upload Photo'
                            type='file'
                            onChange={(e) => handleImagePath(e)}
                        />
                        <div className="image-container">
                            {
                                imagePath && <img src={imagePath} width="100"/>
                            }
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