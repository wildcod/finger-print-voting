import {
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
} from '../types'


const initialState = {
    username : null,
    role : null,
    _id : null,
    token: null,
    requestingLogin : false,
    loggedIn : false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                requestingLogin : true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                requestingLogin : false,
                token : action.payload.data["token"],
                loggedIn : true,
                username : action.payload.data["username"],
                role : action.payload.data["role"],
                _id : action.payload.data["_id"]
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            return initialState
        default:
            return state;
    }
}