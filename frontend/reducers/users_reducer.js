import { RECEIVE_CURRENT_USER } from '../actions/session_action';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id] : action.currentUser });
        default:
            return state;
    }
}