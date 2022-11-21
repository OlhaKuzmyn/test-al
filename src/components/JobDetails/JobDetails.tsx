import React, {FC} from 'react';
import {IJob} from "../../interfaces";

interface IProps {
    job: IJob
}
const JobDetails: FC <IProps> = ({job}) => {
    return (
        <div>
            <h1>Job Details</h1>
            <p>
                {job.name}
            </p>
            <p>
                {job.title}
            </p>
        </div>
    );
};

export {
    JobDetails
};