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
                    {job.title}
                </p>
                <p>
                    Company: {job.name}
                </p>
                {job.employment_type.map(empType =><p> - {empType}</p> )}
                <p>
                    Address: {job.address}
                </p>
            </div>
            <hr/>
        </div>

    );
};

export {
    Job
};