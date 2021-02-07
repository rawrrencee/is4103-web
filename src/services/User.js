import {AUTHENTICATION_ERROR, BACKEND_BASE_URL, LOGIN_SUCCESSFUL} from "../config/constants";
import {store} from "../store";

export class UserService {
    static async login(email, password) {
        const url = BACKEND_BASE_URL + '/person/login';
        const body = {email, password};
        const success = true;
        if(success) {
            store.dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: { name: 'test'}
            })
        } else {
            store.dispatch({
                type: AUTHENTICATION_ERROR,
                payload: body.error
            })
        }
    }
}