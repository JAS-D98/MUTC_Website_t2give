import React from 'react'
import './Club_card.css'
import Venues from './Club_card.js'

export default function Club_card() {
  return (
   <>
    {Venues.map((venue)=>{
            return(
            <div className='club_card'>
                <h1>{venue.track}</h1>
                <p><span>Time: </span>{venue.time}<br/><span>Venue: </span>{venue.venue}<br/> <span>Lead:</span> {venue.lead}</p>    
            </div>
            )
        })
    }
   </>
  )
}
