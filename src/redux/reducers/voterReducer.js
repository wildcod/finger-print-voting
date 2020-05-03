import {
    SET_VOTER,
    CLEAR_VOTER,
    VOTER_ERROR, ADD_VOTER
} from '../types';


const initialState = {
    requestingAddVoter : false,
    voters : null
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
        case VOTER_ERROR:
        case CLEAR_VOTER:
            return initialState
        default:
            return state;
    }
}