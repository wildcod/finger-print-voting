import {
    ADD_CANDIDATE,
    CLEAR_CANDIDATES,
    SET_CANDIDATES, UPDATE_LOADER_STATUS
} from '../types';


const initialState = {
    candidates : null,
    requestingAddCandidate : false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CANDIDATES:
            return {
                ...state,
                candidates: action.payload['data']
            };
        case ADD_CANDIDATE:
            return {
                ...state,
                requestingAddCandidate: action.payload.status
            };
        case CLEAR_CANDIDATES:
            return initialState
        default:
            return state;
    }
}