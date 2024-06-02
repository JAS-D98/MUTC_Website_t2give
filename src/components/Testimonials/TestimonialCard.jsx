import React from 'react'
import './TestimonialCard.css'

export default function TestimonialCard({image,alt,name,message}) {
  return (
    <div>
        <div className='testimonial-card'>
            <div className="testimonial-img">
                <img src={image} alt={alt} width="100%" height="100%" />
            </div>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    </div>
  )
}
