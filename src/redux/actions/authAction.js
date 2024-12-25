import axios from 'axios'
import api from '../../utils/api'
import {
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    CLEAR_VOTER,
    CLEAR_ELECTION,
    LOGOUT_SUCCESS,
    CLEAR_ERROR,
    CLEAR_CANDIDATES
} from '../types'
import { returnErrors } from './errorAction'

export const initiateLogin = ({username, password}) => async(dispatch) => {
    try{
        dispatch({
            type : LOGIN_START
        })
        const { ok, data } = await axios.post(api('loginUrl'),{
            username,password
        })
        dispatch({
            type : LOGIN_SUCCESS,
            payload : {
                data
            }
        })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'LOGIN_FAIL')
        );
        dispatch({
            type: LOGIN_FAIL
        });
    }

}

export const logout = () => async(dispatch) => {
    try{
        dispatch({
            type : LOGOUT_SUCCESS
        })
        dispatch({
            type : CLEAR_ELECTION
        })
        dispatch({
            type : CLEAR_ERROR
        })
        dispatch({
            type : CLEAR_VOTER
        })
        dispatch({
            type : CLEAR_CANDIDATES
        })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'LOGOUT_FAIL')
        );
    }
}