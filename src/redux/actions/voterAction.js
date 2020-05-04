import {SET_VOTER, CLEAR_VOTER, SET_CUR_VOTER, CAST_VOTE} from '../types';
import {returnErrors} from "./errorAction";
import axios from "axios";
import api from "../../util/api";

export const fetchVoterDetails = (formInputData) => async(dispatch) => {
    try{
        const { data }  = await axios({
            method: 'post',
            url: api('voterAuthentication'),
            data: formInputData,
            headers: {'Content-Type': 'multipart/form-data' }
        });
        console.log(data)
        if(data && data.message === 'verified'){
            dispatch({
                type : SET_CUR_VOTER,
                payload : {
                    data : data.voter.voter,
                    status : true
                }
            })
        }
        return data;
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'VOTER_FINGER_PRINT_ERROR')
        );
    }
}

export const castVote = (candidateId, electionId, voterId) => async (dispatch) => {
    try{
        const { data } = await axios.post(api('castVote'),
                    {
                        candidateId : candidateId,
                        id : electionId,
                        voterId : voterId
                    });
        console.log('Response',data);
        dispatch({
            type : CAST_VOTE,
            payload : {
                votedElections : data.voter.voted_elections,
            }
        })
        return data
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'CAST_VOTE_ERROR')
        );
    }
}