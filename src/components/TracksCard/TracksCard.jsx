import React from 'react';
import './TracksCard.css';
import Tracks from './TracksCard';

export default function TracksCard() {
  return (
    <div className="tracks-container">
      {Tracks.map((track, i)=>{
        return(
            <div key={i} className="track-card">
              <h1>{track.track}</h1>
              <span></span>
              <p>{track.about}</p>
            </div>
        )
      })

      }
    </div>
  );
}
