import React from 'react'
import './Navbar.css'
import navLinks from './Navbar'
import logo from '../../assets/images/logo.svg'
import Button from '../Button/Button'

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

// const Menu =()=>(
//     <>
//     <p><a href="#home">Home</a></p>
//     <p><a href="#wgpt3">What is GPT3?</a></p>
//     <p><a href="#possibility">Open AI</a></p>
//     <p><a href="#features">Case Studies</a></p>
//     <p><a href="#blog">Library</a></p>
//     </>
//      )
export default function Navbar() {
  return (
   <div className="header-el">
    <div className='header'>

    <div className='logo'>
        <div className="logo-img">
            <img src={logo} alt="" width={30} />
        </div>
        <h1>MUTC</h1>
    </div>

    <Menu/>
        
    <Button title="Join Group" className="btn"/>
    </div>
    
    <div className="menu-small">
        <Menu className="links-small"/>
        <Button title="Join Group" className="btn"/>
    </div>
   </div>
    
  )
}
