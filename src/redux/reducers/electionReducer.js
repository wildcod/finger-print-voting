import {
    ELECTION_LIST,
    ELECTION_ERROR,
    CLEAR_ELECTION, ADD_CANDIDATE, ADD_ELECTION
} from '../types';


const initialState = {
   electionList : null,
    requestingAddElection : false
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
        case ELECTION_ERROR:
        case CLEAR_ELECTION:
            return initialState
        default:
            return state;
    }
}