import React, {useEffect, useState} from 'react';
import './App.css';
import {jobService} from "./services";

function App() {

  const [jobs, setJobs] = useState([])

  useEffect( ()=>{
    // @ts-ignore
    jobService.getJobs().then(value => setJobs(value.data))
  }, [])

  console.log(jobs)

  return (
    <div>

    </div>
  );
}

export default App;
