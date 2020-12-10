import {applyMiddleware, createStore} from 'redux';
import {provider} from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState){
return createStore(rootReducer,
    initialState,
    applyMiddleware(thunk,reduxImmutableStateInvariant()))
}
