import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth';

const AllRoutes = () => {
  return (
    <div>
        <Routes path="/" >
            <Route index element={<Home/>}/>
            <Route path='/Auth' element={<Auth/>}></Route>
        </Routes>
    </div>
    
  )
}

export default AllRoutes;
