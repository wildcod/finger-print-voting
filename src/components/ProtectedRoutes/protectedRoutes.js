import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import {initiateLogin} from "../../redux/actions/authAction";
import {clearErrors} from "../../redux/actions/errorAction";
import {withRouter} from "react-router";
import {connect} from "react-redux";


function ProtectedRoutes({ component : Component,loggedIn , ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                console.log(loggedIn)
                if(loggedIn){

                    return <Component {...props} />
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
}

const mapStateToProps = state => ({
    loggedIn: state.authStore.loggedIn
});


export default withRouter(connect(mapStateToProps, null)(ProtectedRoutes))