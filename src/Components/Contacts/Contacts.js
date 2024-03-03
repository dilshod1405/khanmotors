import React, { Component } from 'react'
import './contacts.scss'
import HeaderContact from '../Header/HeaderContact'
import { InsertLink, Message, PinDrop, Instagram, Telegram, Call } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Facebook } from '@mui/icons-material/';

export default class Contacts extends Component {
  render() {
    return (
      <div className='Contacts'>
        <HeaderContact />
        <div className="map">
          <iframe title={<p></p>} src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6001.806067963402!2d69.22257085282897!3d41.22388352925543!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzJzI2LjAiTiA2OcKwMTMnMjEuMyJF!5e0!3m2!1sru!2s!4v1706347757829!5m2!1sru!2s" width="100%" height="400" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0"></iframe>
        </div>
        <div className="info">
          <ul className="social">
          <h4 style={{ paddingLeft: '5%'}}><InsertLink style={{fontSize: '32px', color:'#009148'}} data-aos="zoom-in"/> Murojaatlar uchun</h4>
            <li className="media"><Link className='link' to={'/'} target='blank'><Instagram data-aos="zoom-in"  data-aos-delay="300"/> Instagram sahifa</Link></li>
            <li className="media"><Link className='link' to={'/'} target='blank'><Telegram data-aos="zoom-in"  data-aos-delay="500"/> Telegram sahifa</Link></li>
            <li className="media"><Link className='link' to={'/'} target='blank'><Facebook data-aos="zoom-in"  data-aos-delay="700"/> Facebook sahifa</Link></li>
            <li className="media"><p className='link' style={{height: '2vh'}}><PinDrop data-aos="zoom-in"  data-aos-delay="900"/> Toshkent, Yangi Sergeli ko'chasi 22-uy</p></li>
            <li className="media"><p className='link' style={{height: '2vh'}}><Call data-aos="zoom-in"  data-aos-delay="1100"/> +998 93 704 14 05</p></li>
          </ul>
          <ul className="message">
            <h4><Message style={{fontSize: '32px', color:'#009148'}} data-aos="zoom-in" data-aos-delay="500"/> Xabar qoldirish</h4>
            <form >
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" style={{color: '#009148'}}>Raqamingiz va murojaatingizni yozib qoldiring.</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" data-aos="zoom-in"  data-aos-delay="500"></textarea>
              </div>
              <button type="submit" className="btn btn-success" >Yuborish</button>
            </form>
          </ul>
        </div>
      </div>
    )
  }
}
