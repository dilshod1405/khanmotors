import React from 'react'
import './sidebar.scss'
import { SidebarData } from './SidebarData'
import elements from '../Constants/constants'

const Sidebar = () => {
    
    return (
      <div className='Sidebars'>
        <img src={elements.logo} alt="" sizes="" srcSet="" className='logo'/>
        <ul className='SidebarList'>
            {SidebarData.map((val, key) => {
                return (
                    <li key={key} onClick={() => {window.location.pathname = val.link}}  data-aos='fade-right' data-aos-delay={`${val.data}`}>
                        <div className='icon'>{val.icon}</div>
                        <div className='title'>{val.title}</div>
                    </li>
                )
            })}
        </ul>

        <ul className='social'>
            {/* <li><Link className='media' to={'/'} target='blank'><Instagram/></Link></li>
            <li><Link className='media' to={'https://t.me/khanmotors_uz'} target='blank'><Telegram/></Link></li>
            <li><Link className='media' to={'/'} target='blank'><Facebook/></Link></li> */}
            <li className='flag'><img alt='' width={'25px'} srcSet='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Uzbekistan_%283-2%29.svg/2560px-Flag_of_Uzbekistan_%283-2%29.svg.png'/></li>
            <li className='flag'><img alt='' width={'25px'} srcSet='https://flagpedia.net/data/flags/w1600/ru.png'/></li>
            <li className='flag'><img alt='' width={'25px'} srcSet='https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png'/></li>
        </ul>

        <img className='location' src={elements.location} alt='' data-aos='zoom-in' data-aos-delay='500'/>
        <p>QR kodni skanerlash orqali manzilimiz lokatsiyasini olishingiz mumkin</p>
        <a href='https://dilshodblog.vercel.app' target='blank'>© 2024 Dilshod Normurodov</a>
        
        
      </div>
    )
  }

export default Sidebar;
