import React, {FC} from 'react';
import {IJob} from "../../interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot, faBookmark, faShareNodes, faLessThan} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    job: IJob
}
const JobDetails: FC <IProps> = ({job}) => {

    const navigate = useNavigate();


    function jobList() {
        navigate("/jobs")
    }

    return (
        <div className="sm:mx-3.5 md:mx-0">

            <div className="md:flex md:flex-row gap-x-24">
                <div className="md:w-2/3 sm:w-full gap-y-20">
                    <div className="md:flex md:flex-row justify-between gap-x-80 items-center">
                        <div>
                            <h1 className="text-3xl text-slate-800 font-bold my-3.5">Job Details</h1>
                        </div>
                        <hr className="sm:block md:hidden mb-6"/>
                        <div className="flex flex-row gap-x-20">
                            <div className="">
                                <Link to="#" className="text-base text-slate-800"><FontAwesomeIcon icon={faBookmark} className="mr-2" /> Save to my list</Link>
                            </div>
                            <div>
                                <Link to="#" className="text-base text-slate-800"><FontAwesomeIcon icon={faShareNodes} className="mr-2"/>Share</Link>
                            </div>
                        </div>

                    </div>
                    <hr className="md:block sm:hidden"/>

                    <div className="md:block sm:hidden">
                        <button className="w-32 h-14 border-box py-3.5 px-7 my-8 text-xs bg-slate-800 text-white rounded-md">APPLY NOW</button>
                    </div>
                    <div className="sm:mt-6 md:mt-0" >
                        <div className="">
                            <div className="md:flex md:flex-row justify-between gap-x-3.5 mb-5">
                                <div className="w-2/3 ">
                                    <p className="text-2xl text-slate-800 font-bold">
                                        {job.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-slate-800 sm:ml-64 md:ml-0 sm:mt-4 md:mt-0">
                                        {job.salary}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-5">
                                <p className="text-slate-800 text-base">
                                    {job.description}
                                </p>
                            </div>
                            <div className="mb-5">
                                <ul className="font-bold text-slate-800 text-base list-disc">Employment Type:
                                    {job.employment_type.map(empType =><li className="font-normal text-slate-800 text-base ml-5 " key={empType}>{empType}</li> )}
                                </ul>
                            </div>
                            <div className="">
                                <ul className="font-bold text-slate-800 text-base list-disc">Benefits:
                                    {job.benefits.map(benef =><li className="font-normal text-slate-800 text-base ml-5" key={benef}>{benef}</li> )}
                                </ul>
                            </div>
                            <div className="sm:flex sm:items-center sm:content-center sm:h28 ">
                                <button className="w-32 h-14 border-box py-3.5 px-7 my-8 sm:mx-auto md:mx-0 text-xs bg-slate-800 text-white rounded-md">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 sm:w-full my-3.5 bg-slate-800 text-slate-200 h-1/4 border-box rounded-md ">
                    <div className="py-8 px-16">
                        <div>
                            <p className="text-xl font-bold">
                                {job.name}
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <FontAwesomeIcon icon={faLocationDot} className="mt-3.5 mr-2 text-zinc-300"/>
                            <p className="text-lg my-2">
                                {job.address}
                            </p>
                        </div>
                        <div>
                            <p className="text-lg">
                                {job.phone}
                            </p>
                        </div>
                        <div>
                            <p className="text-lg">
                                {job.email}
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col border-box items-center content-center sm:h28">
                        <iframe
                            src={`https://maps.google.com/maps?q=${job.location.lat}, ${job.location.long}&z=15&output=embed`}
                            className="md:w-96 sm:w-11/12 h-64 mb-1.5" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title={job.title}></iframe>
                    </div>

                </div>


            </div>
            <div className="xl:block sm:hidden mt-14 absolute left-60">
                <button onClick={jobList} className="text-slate-800 font-bold text-xs w-52 h-12 bg-slate-500 rounded-md border-box"><FontAwesomeIcon icon={faLessThan} /> RETURN TO JOB BOARD</button>
            </div>
        </div>
    );
};

export {
    JobDetails
};