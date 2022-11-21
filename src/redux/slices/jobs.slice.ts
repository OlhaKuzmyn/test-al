import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {jobService} from "../../services";
import {IJob} from "../../interfaces";

interface IState {
    jobs: IJob[],

}

const initialState: IState = {
    jobs: [],

}

const getJobs = createAsyncThunk<IJob[]>(
    'jobSlice/getJobs',
    async () => {
        const {data} = await jobService.getJobs()
        return data
    }
)

const jobSlice = createSlice({
    name: 'jobSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.fulfilled, (state, action) => {
                state.jobs = action.payload
            })
    }
})

const {reducer: jobsReducer} = jobSlice

const jobActions = {
    getJobs,
}

export {
    jobsReducer,
    jobActions
}