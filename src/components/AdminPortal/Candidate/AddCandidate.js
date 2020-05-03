import React, {useEffect, useState} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import '../../../css/adminProtalStyle/add-candidate.css'
import HomeLayout from "../../Layout/HomeLayout";
import { addCandidate } from '../../../redux/actions/adminAction'
import { clearErrors } from '../../../redux/actions/errorAction'
import {withRouter} from "react-router";
import {connect} from "react-redux";

const AddCandidate = ({ addCandidate, error, clearErrors}) => {
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
        const candidateData = {
            name : formData.firstName + ' ' + formData.lastName,
            address : formData.address,
            partyName : formData.partyName,
            age : formData.age,
            photo : imagePath
        };
        formInputData.set('candidate_data', JSON.stringify(candidateData));
        formInputData.append('file', imageFile);
        await addCandidate(formInputData);
        alert('Candidate Add Successfully')
    };
    if(error.status){
        alert('Something went wrong')
        clearErrors()
    }
    return (
        <HomeLayout heading="Add Candidate">
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
        </HomeLayout>
    );
};
const mapStateToProps = state => ({
    error : state.errorStore,
});

const mapActionToProps = () => {
    return {
        addCandidate,
        clearErrors
    }
}


export default withRouter(connect(mapStateToProps, mapActionToProps())(AddCandidate))