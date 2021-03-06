import {
    SET_VOTER,
    CLEAR_VOTER,
    VOTER_ERROR, ADD_VOTER, SET_CUR_VOTER, CAST_VOTE, SET_VOTED_ELECTIONS,
    UPDATE_LOADER_STATUS
} from '../types';


const initialState = {
    requestingAddVoter : false,
    voters : null,
    currentVoter : null,
    voterVerifiedStatus : false,
    votedElections : null
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
                currentVoter : null,
                votedElections: action.payload['votedElections'],
                voterVerifiedStatus : false
            };
        case SET_VOTED_ELECTIONS:
            return {
                ...state,
                votedElections: action.payload['votedElections'],
            };
        case VOTER_ERROR:
        case CLEAR_VOTER:
            return initialState
        default:
            return state;
    }
}