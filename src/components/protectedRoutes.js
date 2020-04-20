import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import HomeLayout from "./HomeLayout";


const ProtectedRoutes = ({ component : Component , ...rest}) => {
    const role= JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')).role : '';
    console.log('role',role);
    return (
        <Route
            {...rest}
            render={props => {
                if(role === 'admin'){
                    return <HomeLayout {...rest}>
                              <Component  {...props}/>
                           </HomeLayout>
                }
                else{
                    return <Redirect to={
                        {
                            pathname : '/',
                            state : {
                                from : props.location
                            }
                        }
                    }
                    />
                }
            }}
        />
    );
};

export default ProtectedRoutes;