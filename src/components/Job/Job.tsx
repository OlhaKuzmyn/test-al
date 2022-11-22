import React, {FC} from 'react';
import {IJob} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IProps {
    job: IJob
}

const Job: FC <IProps> = ({job}) => {

    const navigate = useNavigate();

    const details = () => {
        navigate(`/details/${job.id}`, {state: job})

    }

    return (
        <div onClick={details} className="bg-slate-200 border-box rounded-md flex flex-row items-center gap-x-6 py-6 px-4 h-40 mb-2 cursor-pointer">
            <div>
                <img className="rounded-full w-20 h-20" src={job.pictures[0]} alt={job.title}/>
            </div>
            <div >
                <div className="mb-2">
                    <p className="text-lg font-bold text-slate-800">
                        {job.title}
                    </p>
                </div>
                <div className="mb-2">
                    <p className="text-base text-slate-500">
                        {job.name}
                    </p>
                </div>
                <div>
                    <p className="text-base text-slate-500">
                        <FontAwesomeIcon icon={faLocationDot} className="mt-3.5 mr-2"/>
                        Address: {job.address}
                    </p>
                </div>
            </div>
        </div>

    );
};

export {
    Job
};