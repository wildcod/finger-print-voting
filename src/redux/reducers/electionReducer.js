import {
    ELECTION_LIST,
    ELECTION_ERROR,
    CLEAR_ELECTION, ADD_CANDIDATE, ADD_ELECTION, SET_END_ELECTIONS
} from '../types';


const initialState = {
   electionList : null,
   requestingAddElection : false,
   closedElections : null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ELECTION_LIST:
            return {
                ...state,
                electionList: action.payload['data']
            };
        case ADD_ELECTION:
            return {
                ...state,
                requestingAddElection: action.payload.status
            };
        case SET_END_ELECTIONS:
            return {
                ...state,
                closedElections: action.payload.closedElections
            };
        case ELECTION_ERROR:
        case CLEAR_ELECTION:
            return initialState
        default:
            return state;
    }
}