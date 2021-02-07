import {combineReducers, createStore} from 'redux'
import {userReducer} from "./reducer/user-reducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
};
const persistUserReducer = persistReducer(persistConfig, combineReducers({
    userReducer
}));


export const store = createStore(persistUserReducer);