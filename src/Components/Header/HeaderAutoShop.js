import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { ShoppingCart } from '@mui/icons-material/';

export default class HeaderAutoShop extends Component {
  render() {
    return (
      <div className='Header'>
            <h4 style={{paddingTop: '1%', color: '#2F4050'}}><Link to={'/'} style={{color: '#009148'}}>Khanmotors.uz</Link> / <ShoppingCart style={{fontSize: '28px'}}/> Avto savdo</h4>
      </div>
    )
  }
}
