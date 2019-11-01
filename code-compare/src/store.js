import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
export default function configureStore(initialState = {
    inEmail: "",
    inPassword: "",
    upEmail: "",
    upPassword: "",
    uid: ""
}) {
    return createStore(
        rootReducer,
        initialState
    );
}