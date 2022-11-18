import {axiosService, Res} from "./axios.service";
import {IJob} from "../interfaces";
import {baseURL} from "../constants";

const jobService = {
    getJobs: ():Res<IJob[]> => axiosService.get(baseURL as string),

}

export {
    jobService
}