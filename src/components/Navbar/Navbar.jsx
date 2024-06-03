import React, { useState } from 'react'
import './Navbar.css'
import navLinks from './Navbar'
import logo from '../../assets/images/logo.svg'
import Button from '../Button/Button'
import menu from './../../assets/images/menu.png'
import close from './../../assets/images/close.svg'

const Menu=()=>{
    return (
       <div className="menu-el">
         {navLinks.map((link) => (
            <p key={link.label}>
                <a href={link.href}>{link.label}</a>
            </p>
        ))}
       </div>
    )
}

export default function Navbar() {
    const [toggleMenu, setToggleMenu]=useState(false);
  return (
   <div className="header-el">
        <div className='header'>

        <div className='logo'>
            <div className="logo-img">
                <img src={logo} alt="" width={30} />
            </div>
            <h1>MUTC</h1>
        </div>
        <span className='menu__cont'>
        <Menu className='menu__cont'/>
            
        <Button title="Join Group" className="btn"/>
        </span>
        {/* <div className="menu-small">
            {toggleMenu
            ? <img src={menu} alt="menu" size={20} onClick={()=>setToggleMenu(false)}/>:
            <img src={menu} alt="menu" size={20} onClick={()=> setToggleMenu(true)}/>
            }
            {toggleMenu && (
                <div className='menu_container scale-up-center'>
                <Menu className="links-small"/>
                <Button title="Join Group" className="btn"/>
                </div>
            )}
        </div> */}
        
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <img src={close} alt="close icon" width={30} height={30} onClick={()=>setToggleMenu(false)}/>
        : <img src={menu} alt="menu icon" width={30} height={30} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
           <div className="gpt3__navbar-menu_container scale-up-center">
               <div className="gpt3__navbar-menu_container-links">
                <div className='gpt3__navbar-menu_container-links-sign'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/leadership">Leadership</a></li>
                    <li><a href="/tracks">Tracks</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
               </div>
               </div>
           </div>
        )}
      </div>
        </div>
   </div>
    
  )
}
