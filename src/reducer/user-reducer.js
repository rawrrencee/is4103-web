import {AUTHENTICATION_ERROR, LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL} from "../config/constants";

const defaultState = {
    currentUser: undefined,
    isAuthenticated: false,
    error: false,
    errorMsg: "",
};
export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                error: false,
                errorMsg: "",
                isAuthenticated: true,
                currentUser: action.payload
            };
        case AUTHENTICATION_ERROR:
            return {
                ...state,
                error: true,
                isAuthenticated: false,
                errorMsg: action.payload
            }

        case LOGOUT_SUCCESSFUL:
            return {
                error: false,
                errorMsg: undefined,
                isAuthenticated: false,
                currentUser: undefined
            }

        default:
            return state;
    }
}