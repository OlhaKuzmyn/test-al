import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {JobDetailsPage, JobsPage} from "./pages";


function App() {

  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'jobs'}/>}/>
            <Route path={'jobs'} element={<JobsPage/>}/>
            <Route path={'details/:id'} element={<JobDetailsPage/>}/>
        </Route>

    </Routes>
  );
}

export default App;
