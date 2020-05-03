import {combineReducers} from 'redux'
import AuthReducer from './authReducer'
import ErrorReducer from './errorReducer'
import ElectionReducer from './electionReducer'
import CandidateReducer from './candidateReducer'
import VoterReducer from './voterReducer'

export default combineReducers({
    authStore : AuthReducer,
    errorStore : ErrorReducer,
    electionStore : ElectionReducer,
    candidateStore : CandidateReducer,
    voterStore : VoterReducer,
})