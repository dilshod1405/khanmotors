import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Build } from '@mui/icons-material'
import './header.scss'

export default class HeaderAutoTech extends Component {
  render() {
    return (
      <div className='Header'>
        <h4 style={{paddingTop: '1%', color: '#2F4050'}}><Link to={'/'} style={{color: '#009148'}}>Khanmotors.uz</Link> / <Build style={{fontSize: '28px'}}/> AvtoTex xizmat</h4>
      </div>
    )
  }
}
