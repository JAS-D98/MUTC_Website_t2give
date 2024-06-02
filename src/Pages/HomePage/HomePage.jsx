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
import TestimonialCard from '../../components/Testimonials/TestimonialCard'
import Testimonial1 from './../../assets/images/Testimonial1.png'
import Testimonial2 from './../../assets/images/Testimonial2.png'
import Testimonial3 from './../../assets/images/Testimonial3.png'
import Testimonial4 from './../../assets/images/Testimonial4.png'
import globe from './../../assets/images/globe.png'

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
        <p>Mut Tech Club <span>(MUTC)</span> was started on the year 2023 by a dedicated time of tech enthusiasts who through their dedication build a fast growing developers community at an accellerated pace that so forth its drastic expansion and recognition by the university administration. <br/> It's the perfect solution for anyone looking to make a difference.</p>
      </div>
      <div className="about-right">
        <img src={possibility} alt="image of a lady wearing tech glases" width="100%" />
      </div>
    </div>
    <div className="testimonials">
      <div className="heading">
          <p>what our members say of us</p>
          <h1>Here testimonials from some of our Members of How <br/> this club has Helped them</h1>
      </div>
      <div className="textimonial_container">
      <TestimonialCard image={Testimonial1} alt="image of a young man" name="James Njuguna" message="Through this club, I was able to build beautiful UIs with ease as well as create my own sophisticated themes and layouts."/>
      <TestimonialCard image={Testimonial2} alt="image of a lady man" name="Mary Njuguna" message="The club has all that you need on matters of modern technology under one roof which is a huge help for every student."/>
      <TestimonialCard image={Testimonial3} alt="image of a lady man" name="Winney Owino" message="I love the fact that the club believes in building everyone and have everyone be better than they were initially."/>
      <TestimonialCard image={Testimonial4} alt="image of a young man" name="Phillip Kipchumba" message="The answer to any question you might have can be found in this group as there are over 2,000 contributors who are always willing to help."/>
      </div>
      <div className="call_to_action">
         <img src={globe} alt="image of a globe" width={300} height={300} />
         <div className='call_to_action_msg'>
         <h1>Join the Community Now</h1>
         <p>Get to be part of us by registering.</p>
         <Button title="Register as a member"/>
         </div>
      </div>
    </div>
    </div>
  )
}
