import React, {FC} from 'react';
import {JobDetails} from "../../components";
import {useLocation} from "react-router-dom";

const JobDetailsPage: FC = () => {
    const {state} = useLocation()

    return (
        <div>
            <JobDetails job={state}/>
        </div>
    );
};

export {
    JobDetailsPage
};