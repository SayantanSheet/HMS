import React from 'react';
import Home from '../pages/Home';
import Service from '../pages/service';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import {Routes,Route} from 'react-router-dom';


const Routers=()=>{
    return (
       <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
       </Routes>
    )
}

export default Routers;