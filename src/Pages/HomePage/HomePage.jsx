import React from 'react'
import './HomePage.css'
import robot from './../../assets/images/service-1.png'
import Button from '../../components/Button/Button'
import  photoshop from '../../assets/images/photoshop.png'
import  discord from '../../assets/images/discord.png'
import  figma from '../../assets/images/figma.png'
import  cloud from '../../assets/images/raindrop.png'
import  possibility from '../../assets/images/possibility.png'
import Services from '../../components/services/Services'

export default function HomePage() {
  return (
    <div className="home">
      <div className="home_hero">
      <div className="home_hero_content">
      <h1>We are dedicated to <span>advance our members knowledge </span>in programming and technology.</h1> 
      <p>Get to unleash your hidden potential. Upgrade your productivity <br />with us and be a world class dev.</p>
      <Button title="Let's Get Started"/>
      </div>
      <div className='home_hero_img'>
        <img src={robot} alt="image of a robot"  width="100%" height="100%"/>
      </div>
    </div>
    <div className="why-us">
      <h1>What to look out for?</h1>
    <div className="topics">
      <Services image={photoshop} description="image of a photoshop logo" text="Graphics Design"/>
      <Services image={discord} description="image of a discord logo" text="Collaboration"/>
      <Services image={figma} description="image of a figma logo" text="UI/UX Design"/>
      <Services image={cloud} description="image of a cloud logo" text="Cloud Engineering"/>
    </div>
    <p>We deliver an unrivaled experience for all developers.</p>
    </div>
    <div className="about-us">
      <div className="text-left">
        <div className="about-us-heading">
          <p>about-us</p>
          <h1>Our History &amp; Greatest Milestones</h1>
        </div>
        <p>Mut Tech Club <span>(MUTC)</span> was started on the year 2023 by a dedicated time of tech enthusiasts who through their dedication build a fast growing developers community at an accellerated pace that so forth its drastic expansion and recognition by the university administration.</p>
      </div>
      <div className="about-right">
        <img src={possibility} alt="" width="100%" />
      </div>
    </div>
    </div>
  )
}
