import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { CarRental } from '@mui/icons-material'

export default class HeaderRentCar extends Component {
  render() {
    return (
      <div className='Header'>
         <h4 style={{paddingTop: '1%', color: '#2F4050'}}><Link to={'/'} style={{color: '#009148'}}>Khanmotors.uz</Link> / <CarRental style={{fontSize: '28px'}}/> Avto ijara</h4>
      </div>
    )
  }
}
