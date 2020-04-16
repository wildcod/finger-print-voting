import React, {useState} from 'react';
import Layout from "./Layout";
import { Button, Dropdown, Form } from 'semantic-ui-react'
import '../css/login.css';
import api from '../util/api'
import axios from 'axios'

const Login = () => {

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [errorMsg, setErrorMgs] = useState(null);
    const [role , setRole] = useState(1);

    const handleSubmit = async (e) => {
           e.preventDefault();
           console.log('submit', userName , password, role);
           const res = await axios.post(api('loginUrl'),{userName,password});
           console.log(res);
    };

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
                <Form.Field>
                    <Dropdown clearable options={options} selection className="form-input"
                              onChange={(e, data) => setRole(data.value)}
                              defaultValue={1}/>
                </Form.Field>
                <Button type='submit' className="form-input login-btn">Submit</Button>
            </Form>
            </div>
        </Layout>
    );
};

export default Login;

const options = [
    { key: 1, text: 'Admin', value: 1 },
    { key: 2, text: 'Voter', value: 2 },
];