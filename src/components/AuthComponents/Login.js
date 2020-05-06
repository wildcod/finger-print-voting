import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from "react-router";
import '../../css/authStyle/login.css';
import { connect } from 'react-redux'
import { initiateLogin } from '../../redux/actions/authAction'
import { clearErrors } from '../../redux/actions/errorAction'
import LoaderContainer from "../common/Loader";

const Login = ({
   initiateLogin,
   history,
   loggedIn,
   role,
   clearErrors,
   status,
   requestingLogin
}) => {

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const handleSubmit = async (e) => {
           e.preventDefault();
           clearErrors();
           await initiateLogin({username : userName,password})
    };

    useEffect(() => {
        if(loggedIn){
            if(role === "admin"){
                return history.push('/election-list');
            }
            history.push('/voter')
        }
    },[loggedIn]);

    return (
        <>
        <Layout>
            <div className="form-container">
            <Form className="form-container-main" onSubmit={handleSubmit}>
                <Form.Field >
                    <input placeholder='Username' className="form-input"
                           value={userName}
                           type="text"
                           onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                    <input placeholder='Password' className="form-input"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           type="password"
                    />
                </Form.Field>
                <Button type='submit' className="form-input login-btn">Submit</Button>
            </Form>
                {
                    status && <p style={{ textAlign : 'center', color : 'red', fontSize : '30px'}}>Authentication Failed</p>
                }
            </div>
        </Layout>
            {
               requestingLogin && <LoaderContainer/>
            }
        </>
    );
};

const mapStateToProps = state => ({
    loggedIn: state.authStore.loggedIn,
    role: state.authStore.role,
    requestingLogin: state.authStore.requestingLogin,
    errorMsg: state.errorStore.msg,
    status: state.errorStore.status,
});


const mapActionToProps = () => {
    return {
        initiateLogin,
        clearErrors
    }
}

export default withRouter(connect(mapStateToProps,mapActionToProps())(Login))