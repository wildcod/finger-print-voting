import {
    ELECTION_LIST,
    ADD_ELECTION,
    ELECTION_DETAILS,
    SET_CANDIDATES,
    ADD_CANDIDATE,
    REQUEST_ADD_CANDIDATE,
    ADD_CANDIDATE_SUCCESS,
    REQUEST_ADD_VOTER,
    ADD_VOTER_SUCCESS,
    REQUEST_ADD_ELECTION,
    ADD_ELECTION_SUCCESS,
    SET_VOTER,
    START_VOTER_FETCH,
    END_VOTER_FETCH,
    SET_END_ELECTIONS
} from '../types';
import {returnErrors} from "./errorAction";
import axios from "axios";
import api from "../../util/api";

export const fetchElectionList = () => async(dispatch) => {
    try{
        const { data } = await axios.get(api('getElections'));
        dispatch({
            type : ELECTION_LIST,
            payload : {
                data : data.elections
            }
        })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'ELECTION_LIST_ERROR')
        );
    }
}

export const fetchCandidates = () => async(dispatch) => {
    try{
        const { data }  = await axios.get(api('getCandidates'));
        dispatch({
            type : SET_CANDIDATES,
            payload : {
                data : data.candidates
            }
        })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'CANDIDATES_ERROR')
        );
    }
}

export const fetchVoters = () => async(dispatch) => {
    try{
        dispatch({
            type : START_VOTER_FETCH,
            payload : {
                status : true
            }
        })
        const { data } = await axios.get(api('getVoters'));
        dispatch({
            type : SET_VOTER,
            payload : {
                data : data.voter
            }
        })
        dispatch({
            type : END_VOTER_FETCH,
            payload : {
                status : true
            }
        })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'VOTERS_FETCH_ERROR')
        );
    }
}

export const addCandidate = (formInputData) => async(dispatch) => {
    try{
        dispatch({
            type : REQUEST_ADD_CANDIDATE,
            payload : {
                status : true
            }
        })
        const res = await axios({
            method: 'post',
            url: api('addCandidate'),
            data: formInputData,
            headers: {'Content-Type': 'multipart/form-data' }
        });
        console.log(res)
        dispatch({
            type : ADD_CANDIDATE_SUCCESS,
            payload : {
                status : false
            }
        })
        return res;
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'ADD_CANDIDATE_ERROR')
        );
    }
}

export const addVoter = (formInputData) => async(dispatch) => {
    try{
        dispatch({
            type : REQUEST_ADD_VOTER,
            payload : {
                status : true
            }
        })
        const res = await axios({
            method: 'post',
            url: api('addVoter'),
            data: formInputData,
            headers: {'Content-Type': 'multipart/form-data' }
        });
        console.log(res)
        dispatch({
            type : ADD_VOTER_SUCCESS,
            payload : {
                status : false
            }
        })
        return res;
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'ADD_VOTER_ERROR')
        );
    }
}

export const addElection = (electionData) => async(dispatch) => {
    try{
        dispatch({
            type : REQUEST_ADD_ELECTION,
            payload : {
                status : true
            }
        })
        const res = await axios.post(api('addElection'), { data : electionData})
        console.log(res)
        dispatch({
            type : ADD_ELECTION_SUCCESS,
            payload : {
                status : false
            }
        })
        return res
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'ADD_ELECTION_ERROR')
        );
    }
}

export const fetchEndElection = () => async(dispatch) => {
    try{
        const { data } = await axios.get(api('getEndElections'))
        console.log(data)
        dispatch({
            type : SET_END_ELECTIONS,
            payload : {
                closedElections : data.election
            }
        })
    }catch(e){
        dispatch(
            returnErrors(e.response.data, e.response.status, 'END_ELECTIONS_ERROR')
        );
    }
}