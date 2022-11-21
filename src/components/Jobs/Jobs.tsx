import React, {FC, useEffect} from 'react';
import {jobActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {Job} from "../Job/Job";

const Jobs : FC = () => {
    const {jobs} = useAppSelector(state => state.jobsReducer);
    const dispatch = useAppDispatch();

    useEffect( ()=>{
        dispatch(jobActions.getJobs())
    }, [dispatch])

    return (
        <div>
            {jobs.map(job=><Job key={job.id} job={job}/>)}
        </div>
    );
};

export {
    Jobs
};