import React, { Component } from 'react'
import './header.scss'
import { Home } from '@mui/icons-material/'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h4 style={{paddingTop: '1%', color: '#2F4050'}}><Link to={'/'} style={{color: '#009148'}}>Khanmotors.uz</Link> / <Home style={{fontSize: '28px'}}></Home> Bosh sahifa</h4>
      </div>
    )
  }
}
