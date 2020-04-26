import React, {useEffect, useState} from 'react';
import Layout from "./Layout";
import { Button, Dropdown, Form } from 'semantic-ui-react'
import { withRouter } from "react-router";
import '../css/login.css';
import api from '../util/api'
import axios from 'axios'

const Login = (props) => {

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [errorMsg, setErrorMgs] = useState(null);
    const [data , setData] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);

    const handleSubmit = async (e) => {
           e.preventDefault();
        setErrorMgs(null);
           console.log('submit', userName , password);
           try{
               const res = await axios.post(api('loginUrl'),{username : userName,password});
               console.log('Response',res);
               setData(res.data);
               setLoginStatus(true);
           }catch(e){
               console.log('Error',e);
               setLoginStatus(false);
               setErrorMgs('Not Authorized User');
           }
    };

    useEffect(() => {
        if(loginStatus){
            console.log('31',JSON.stringify(data));
            window.localStorage.setItem('userData',JSON.stringify(data));
            if(data.role === "admin"){
                return props.history.push('/election-list');
            }
            props.history.push('/voter')
        }
    },[loginStatus]);

    return (
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
                    errorMsg && <p style={{ textAlign : 'center', color : 'red', fontSize : '30px'}}>{errorMsg}</p>
                }
            </div>
        </Layout>
    );
};

export default withRouter(Login);

const options = [
    { key: 1, text: 'Admin', value: 1 },
    { key: 2, text: 'Voter', value: 2 },
];