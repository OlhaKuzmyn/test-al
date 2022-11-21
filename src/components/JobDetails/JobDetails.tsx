import React, {FC} from 'react';
import {IJob} from "../../interfaces";

interface IProps {
    job: IJob
}
const JobDetails: FC <IProps> = ({job}) => {

    return (
        <div>
            <div>
                <h1>Job Details</h1>
                <hr/>
                <button>APPLY NOW</button>
                <div>
                    <div>
                        <div>
                            <p>
                                {job.title}
                            </p>
                        </div>
                        {/*<div>*/}
                        {/*    <p>*/}
                        {/*        {job.createdAt}*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div>
                            <p>
                                {job.description}
                            </p>
                        </div>
                        <div>
                            Employment Type:
                            <ul>
                                {job.employment_type.map(empType =><li>{empType}</li> )}
                            </ul>
                        </div>
                        <div>
                            Benefits:
                            <ul>
                                {job.benefits.map(benef =><li>{benef}</li> )}
                            </ul>
                        </div>
                        <button>APPLY NOW</button>
                    </div>
                    <div>
                        <p>
                            {job.salary}
                        </p>
                    </div>
                </div>
            </div>

            <div>
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
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>
    );
};

export {
    JobDetails
};