import { createStore, compose, applyMiddleware } from 'redux';
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
        initialState,
        compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}

// import { createStore, compose } from 'redux';
// import commonReducer from "./reducers/commonReducer";

// let initialState = {};

// export default createStore(commonReducer,
//     initialState,
//     compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );