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
                        <div>
                            <p>
                                {job.createdAt}
                            </p>
                        </div>
                        <div>
                            <p>
                                {job.description}
                            </p>
                        </div>
                        <div>
                            Employment Type:
                            {job.employment_type.map(empType =><p> - {empType}</p> )}
                        </div>
                        <div>
                            Benefits:
                            {job.benefits.map(benef =><p> - {benef}</p> )}
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
                <p>
                    {job.name}
                </p>

            </div>

        </div>
    );
};

export {
    JobDetails
};