import {
    SET_VOTER,
    CLEAR_VOTER,
    VOTER_ERROR, ADD_VOTER, SET_CUR_VOTER, CAST_VOTE
} from '../types';


const initialState = {
    requestingAddVoter : false,
    voters : null,
    currentVoter : null,
    voterVerifiedStatus : false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_VOTER:
            return {
                ...state,
                voters: action.payload['data']
            };
        case ADD_VOTER:
            return {
                ...state,
                requestingAddVoter: action.payload.status
            };
        case SET_CUR_VOTER:
            return {
                ...state,
                currentVoter: action.payload['data'],
                voterVerifiedStatus : true
            };
        case CAST_VOTE:
            return {
                ...state,
                currentVoter :{
                    ...state.currentVoter,
                    voted_elections: [...state.currentVoter.voted_elections, ...action.payload['votedElections']],
                },
                voterVerifiedStatus : false
            };
        case VOTER_ERROR:
        case CLEAR_VOTER:
            return initialState
        default:
            return state;
    }
}