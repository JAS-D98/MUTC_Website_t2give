import React from 'react'
import './LeadersCard.css'

export default function LeadersCard({image,alt, description,name}) {
  return (
    <div className='leaders_card'>
        <div className="leaders_card_img">
            <img src={image} alt={alt} width="100%" height="100%"/>
        </div>
            <h1>{name}</h1>
            <p>{description}</p>
    </div>
  )
}
