import { combineReducers } from 'redux';

import auth from './auth.reducer';
import todoCart from './todo.reducer';


const reducers = combineReducers({
    auth,
    todoCart,
});

export default reducers;