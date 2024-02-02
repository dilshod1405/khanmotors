import React, { Component } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { Call } from '@mui/icons-material'

export default class HeaderContact extends Component {
  render() {
    return (
      <div className='Header'>
        <h4 style={{paddingTop: '1%', color: '#2F4050'}}><Link to={'/'} style={{color: '#009148'}}>Khanmotors.uz</Link> / <Call style={{fontSize: '28px'}}/> Bog'lanish</h4>
      </div>
    )
  }
}
