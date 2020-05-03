import { SET_VOTER, CLEAR_VOTER } from '../types';
import {returnErrors} from "./errorAction";
import axios from "axios";
import api from "../../util/api";

export const fetchVoterDetails = (formInputData) => async(dispatch) => {
    try{
        const res = await axios({
            method: 'post',
            url: api('voterAuthentication'),
            data: formInputData,
            headers: {'Content-Type': 'multipart/form-data' }
        });
        console.log(res)
        // dispatch({
        //     type : SET_VOTER,
        //     payload : {
        //         data : data.elections
        //     }
        // })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'VOTER_ERROR')
        );
    }
}