import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { AutoAwesomeMosaic } from '@mui/icons-material'

export default class HeaderAutoParts extends Component {
  render() {
    return (
      <div className='Header'>
        <h4 style={{paddingTop: '1%', color: '#2F4050'}}><Link to={'/'} style={{color: '#009148'}}>Khanmotors.uz</Link> / <AutoAwesomeMosaic style={{fontSize: '28px'}}/> Avto qismlar</h4>
      </div>
    )
  }
}
