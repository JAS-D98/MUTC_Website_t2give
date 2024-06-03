import React from 'react'
import './ErrorPage.css'
import error from './../../assets/images/error.gif'
export default function ErrorPage() {
  return (
    <div className='error'>
        <img src={error} alt="gif of a 404 error" width="100%"/>
        <h1>OOP's Page Not Found</h1>
    </div>
  )
}

