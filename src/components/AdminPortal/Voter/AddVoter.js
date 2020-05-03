import React, {useState} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'
import '../../../css/adminProtalStyle/add-voter.css'
import HomeLayout from "../../Layout/HomeLayout";
import {addVoter} from "../../../redux/actions/adminAction";
import { clearErrors} from "../../../redux/actions/errorAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";


const AddVoter = ({ addVoter, error}) => {
    const [formData , setFormData ] = useState({
        firstName : null,
        lastName : null,
        address : null,
        mobile : null,
        age : null,
        photo : null,
        fingerPrint : null
    });

    const inputChangeHandler = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name] : name === 'photo' || name === 'fingerPrint' ? files[0] : value
        })
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        const formInputData = new FormData();
        console.log(formData);
        const voterData = {
            name : formData.firstName + ' ' + formData.lastName,
            address : formData.address,
            mobile : formData.mobile,
            age : formData.age
        };
        formInputData.set('voter_data', JSON.stringify(voterData));
        formInputData.append('image', formData.photo);
        formInputData.append('image', formData.fingerPrint);
       await addVoter(formInputData)
        alert('Voter Add Successfully')
    };

    if(error.status){
        alert('Something went wrong')
        clearErrors();
    }
    return (
        <HomeLayout heading="Add Voter">
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
                            placeholder='Last name'
                            name="lastName"
                            value={formData.lastName}
                            onChange={inputChangeHandler}
                            required
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Address'
                            placeholder='Address'
                            name="address"
                            value={formData.address}
                            onChange={inputChangeHandler}
                            required
                        />
                        <Form.Input
                          type='file'
                          label='Upload Photo'
                          name="photo"
                          onChange={inputChangeHandler}
                          required
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Mobile No'
                            placeholder='Mobile No'
                            name="mobile"
                            value={formData.mobile}
                            onChange={inputChangeHandler}
                            required
                        />
                        <Form.Input
                            label='Age'
                            placeholder='Age'
                            name="age"
                            value={formData.age}
                            onChange={inputChangeHandler}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Finger Print'
                            type='file'
                            name="fingerPrint"
                            onChange={inputChangeHandler}
                            required
                        />
                        <div className="finger-print-container">

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
        addVoter,
        clearErrors
    }
}


export default withRouter(connect(mapStateToProps, mapActionToProps())(AddVoter))