import React, {FC} from 'react';
import {Jobs} from "../../components";
import {faLessThan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const JobsPage: FC = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto mt-7 border-box ">
            <div>
                <Jobs />
            </div>
            <div className="bg-slate-200 max-w-lg h-14 mx-auto rounded-md my-12 items-center flex flex-row justify-between py-4 px-6 border-box">
                <button>
                    <FontAwesomeIcon icon={faLessThan} />
                </button>
                <div className="flex flex-row gap-x-4 text-base font-bold text-slate-500">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
                <button>
                    <FontAwesomeIcon icon={faLessThan}  className="rotate-180"/>
                </button>

            </div>
        </div>
    );
};

export {
    JobsPage
};