import React, {useEffect, useState} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import '../css/add-candidate.css'
import axios from "axios";
import api from "../util/api";

const AddCandidate = () => {
    const [imagePath , setImagePath ] = useState(null);
    const [imageFile , setImageFile ] = useState(null);
    const [formData , setFormData ] = useState({
        firstName : null,
        lastName : null,
        address : null,
        partyName : null,
        age : null
    });

    const handleImagePath = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        let reader = new FileReader();
        console.log(formData);
        reader.onloadend = () => {
            setImagePath(reader.result)
            console.log('25',reader.result)
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


    const submitHandler = async (e) => {
        e.preventDefault();
        const formInputData = new FormData();
        console.log(formData, imageFile);
        const candidateData = {
            name : formData.firstName + ' ' + formData.lastName,
            address : formData.address,
            partyName : formData.partyName,
            age : formData.age,
            photo : imagePath
        };
        formInputData.set('candidate_data', JSON.stringify(candidateData));
        formInputData.append('file', imageFile);
        try{
            const res = await axios({
                method: 'post',
                url: api('addCandidate'),
                data: formInputData,
                headers: {'Content-Type': 'multipart/form-data' }
            });
            alert("Candidate Created Successfully")
        }catch(e){
            alert("Something Went Wrong")
            console.log('Error',e);
        }
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
                            required
                        />
                        <Form.Input
                            label='Last name'
                            name="lastName"
                            value={formData.lastName}
                            onChange={inputChangeHandler}
                            placeholder='Last name'
                            required
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Address'
                            name="address"
                            value={formData.address}
                            onChange={inputChangeHandler}
                            placeholder='Address'
                            required
                        />
                        <Form.Input
                            label='Party Name'
                            name="partyName"
                            value={formData.partName}
                            onChange={inputChangeHandler}
                            placeholder='Party Name'
                            required
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Age'
                            name="age"
                            type="number"
                            value={formData.age}
                            onChange={inputChangeHandler}
                            placeholder='Age'
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Upload Photo'
                            type='file'
                            onChange={(e) => handleImagePath(e)}
                            required
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