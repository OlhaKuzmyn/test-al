import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {jobsReducer} from "./slices/jobs.slice";

const rootReducer = combineReducers({
    jobsReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}