import React from 'react'
import {Route, Routes} from 'react-router-dom';
import './components.scss'
import About from './../About/About';
import Contacts from './../Contacts/Contacts';
import CarProducts from './../Services/AutoParts/CarProducts';
import RentCar from './../Services/AutoRentCar/RentCar';
import Autoshopping from './../Services/AutoShopping/Autoshopping';
import TechnoService from './../Services/TechnoService/TechnoService';
import HomePage from '../Home/HomePage';



const ComponentsGroup = () => {
 
    return (
      <div className='Components'>
        <Routes>

              <Route path='/' element={<HomePage />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/products' element={<CarProducts />}/>
              <Route path='/rentcar' element={<RentCar />}/>
              <Route path='/autoshop' element={<Autoshopping />}/>
              <Route path='/technoservice' element={<TechnoService />}/>
        </Routes>
      </div>
    )
  }

export default ComponentsGroup;