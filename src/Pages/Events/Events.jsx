import React from 'react'
import './Events.css'
import Club_card from '../../components/club_meet_card/Club_card'

export default function Events() {
  return (
    <div className='events'>
        <h1>Get to see our <span>events, programs <br /></span>&amp; venues</h1>
        <div className="club_meet_container">
            <Club_card/>
        </div>
    </div>
  )
}
