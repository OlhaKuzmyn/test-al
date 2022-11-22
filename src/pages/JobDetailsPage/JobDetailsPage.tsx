import React, {FC} from 'react';
import {JobDetails} from "../../components";
import {useLocation} from "react-router-dom";

const JobDetailsPage: FC = () => {
    const {state} = useLocation()

    return (
        <div className="container mx-auto box-border max-w-7xl mt-3.5">
            <JobDetails job={state}/>
        </div>
    );
};

export {
    JobDetailsPage
};