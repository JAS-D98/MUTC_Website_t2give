import React from 'react'
import './Leadership.css'
import curve from './../../assets/images/shape.svg'
import LeadersCard from '../../components/LeadersCard/LeadersCard.jsx'
import Testimonial1 from './../../assets/images/Testimonial1.png'
import Testimonial2 from './../../assets/images/Testimonial2.png'

import Testimonial4 from './../../assets/images/Testimonial4.png'

export default function Leadership() {
  return (
    <div className='leadership'>
      <h1>Meet Our <span>Dedicated</span> leaders</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla doloribus, ipsam voluptate omnis expedita voluptas <br/>labore. Illo facere id doloremque minima? Eveniet, ea provident qui nostrum facilis ex blanditiis!</p>
      <div className="patron">
        <LeadersCard image={Testimonial1} alt="image of a man" description="Patron of the club" name="Dr. John Ndia" className="patron_el"/>
        <div className='patron_title'>
          <h1>A word from our patron</h1>
          <p>Lorem ipsum dolor  amet consectetur adipisicing elit. Voluptas cupiditate asperiores doloremque. Blanditiis iste aliquid officiis inventore perspiciatis officia alias consectetur voluptatum repellendus, voluptates esse illum quas, quia distinctio. Eligendi.</p>
        </div>
      </div>
      <hr/>
      <div className="leaders_container">
        <LeadersCard image={Testimonial1} alt="image of a man" description="Patron of the club" name="Dr. John Ndia"/>
        <LeadersCard image={Testimonial2} alt="image of a lady" description="Chairperson of the club" name="Victory Njeri"/>
        <LeadersCard image={Testimonial4} alt="image of a man" description="Chairperson of the club" name="Allan Muhari"/>
        <LeadersCard image={Testimonial4} alt="image of a man" description="Chairperson of the club" name="Allan Muhari"/>
        <LeadersCard image={Testimonial4} alt="image of a man" description="Chairperson of the club" name="Allan Muhari"/>
        <LeadersCard image={Testimonial4} alt="image of a man" description="Chairperson of the club" name="Allan Muhari"/>
      </div>
      <img src={curve} alt="image of a curve" />
    </div>
  )
}
