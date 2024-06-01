import React from 'react'
import './Services.css'
export default function Services({image, description, text}) {
  return (
    <div className="img-container">
        <div className="img-card">
        <img src={image} alt={description} width="100%"/>
        </div>
        <p>{text}</p>
    </div>
  )
}
