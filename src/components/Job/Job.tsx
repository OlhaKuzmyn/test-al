import React, {FC} from 'react';
import {IJob} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    job: IJob
}

const Job: FC <IProps> = ({job}) => {

    const navigate = useNavigate();

    const details = () => {
        navigate(`/details/${job.id}`, {state: job})

    }

    return (
        <div>
            <div onClick={details}>
                <p>
                    {job.name}
                </p>
                <p>
                    {job.title}
                </p>
            </div>
        </div>
    );
};

export {
    Job
};