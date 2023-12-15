import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootReducer from "@/app/rootReducer";
import rootSaga from "@/app/rootSaga";



export const configureAppStore = (initialState={})=>{
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const middleware = [sagaMiddleware];
    const store = configureStore({
        reducer:rootReducer,
        middleware:(gDM)=>gDM().concat([...middleware]),
        preloadedState:initialState,
    });
    sagaMiddleware.run(rootSaga);
    return store;
}

export const store = configureAppStore();