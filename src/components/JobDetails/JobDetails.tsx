import React, {FC} from 'react';
import {IJob} from "../../interfaces";

interface IProps {
    job: IJob
}
const JobDetails: FC <IProps> = ({job}) => {

    return (
        <div className=" flex flex-row gap-x-24 gap-y-20">
            <div className="w-2/3 gap-y-20">
                <div className="gap-y-20 my-5">
                    <h1 className="text-3xl text-slate-800">Job Details</h1>

                </div>
                <hr/>
                <div>
                    <button className="w-32 h-14 border-box py-3.5 px-7 my-5 text-xs bg-slate-800 text-white rounded-md">APPLY NOW</button>
                </div>
                <div >
                    <div className="mb-5">
                        <div className="flex flex-row justify-between gap-x-3.5">
                            <div className="">
                                <p className="text-2xl text-slate-800">
                                    {job.title}
                                </p>
                            </div>
                            <div>
                                <p>
                                    {job.salary}
                                </p>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <p>*/}
                        {/*        {job.createdAt}*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="">
                            <p>
                                {job.description}
                            </p>
                        </div>
                        <div>
                            Employment Type:
                            <ul>
                                {job.employment_type.map(empType =><li key={empType}>{empType}</li> )}
                            </ul>
                        </div>
                        <div>
                            Benefits:
                            <ul>
                                {job.benefits.map(benef =><li key={benef}>{benef}</li> )}
                            </ul>
                        </div>
                        <div>
                            <button className="w-32 h-14 border-box py-3.5 px-7 my-5 text-xs bg-slate-800 text-white rounded-md">APPLY NOW</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/3">
                <div>
                    <p>
                        {job.name}
                    </p>
                </div>
                <div>
                    <p>
                        {job.address}
                    </p>
                </div>
                <div>
                    <p>
                        {job.phone}
                    </p>
                </div>
                <div>
                    <p>
                        {job.email}
                    </p>
                </div>
                <div>
                    <iframe
                        src={`https://maps.google.com/maps?q=${job.location.lat}, ${job.location.long}&z=15&output=embed`}
                        className="w-96 h-96" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title={job.title}></iframe>
                </div>

            </div>

        </div>
    );
};

export {
    JobDetails
};