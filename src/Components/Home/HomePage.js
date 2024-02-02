import React, { Component } from 'react'
import './home.scss'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

export default class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <Header />
        <Banner />
        
      </div>
    )
  }
};
