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
        <div onClick={details} className="bg-slate-200 border-box rounded-md flex flex-row items-center md:gap-x-6 sm:gap-x-10 py-6 px-4 sm:h-52 md:h-40 mb-2 cursor-pointer sm:mx-2 md:mx-0 ">
            <div>
                <img className="rounded-full md:w-20 md:h-20 sm:w-16 sm:h16" src={job.pictures[0]} alt={job.title}/>
            </div>
            <div className="sm:w-72 md:w-2/3" >
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
                        <FontAwesomeIcon icon={faLocationDot} className=" mr-2"/>
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