import React from 'react'
import './TracksPage.css'
import TracksCard from '../../components/TracksCard/TracksCard.jsx'
import Button from '../../components/Button/Button.jsx'

export default function TracksPage() {
  return (
    <div className='tracks'>
        <h1>Get to <span>View our</span> tracks</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi mollitia sint eos suscipit in,<br /> corporis minus magni repellendus est voluptas cupiditate perferendis sapiente aut quae<br/> recusandae a ducimus fugiat commodi.</p>
        <div className="tracks-container">
           <TracksCard/>
        </div>
        <div className="contact-form">
        <form action="">
          <h1>Get to choose a track</h1>
          <div className="form-input-container">
            <label for="firstName">first name:</label>
            <input type="text" id="firstName" name='firstName' placeholder="enter your first name here" required/>
          </div>
          <div className="form-input-container">
            <label for="lastName">last name:</label>
            <input type="text" id="lastName" name='lastName' placeholder="enter your last name here" required />
          </div>
          <div className="form-input-container">
            <label for="email">email address:</label>
            <input type="email" id="email" name='email' placeholder="enter your email address here" required/>
          </div>
          <div className="form-input-container">
            <label for="course">course:</label>
            <input type="text" id="course" name='course' placeholder="enter your course here" required/>
          </div>
          <div className="form-input-container">
            <label for="year">Academic year:</label>
            <input type="number" id="year" name='year' placeholder="enter your year here" required min="1"/>
          </div>
          <div className="form-input-container">
          <label for="track">Choose Tracks:</label>
            <select name="tracks" id="track">
                <option value="Cyber Security" className='select_tract'>Cyber Security</option>
                <option value="UI/UX design" className='select_tract'>UI/UX design</option>
                <option value="Web development" className='select_tract'>Web development</option>
                <option value="Mobile apps development" className='select_tract'>Mobile apps development</option>
                <option value="Cloud engineering" className='select_tract'>Cloud engineering</option>
                <option value="Power Platform" className='select_tract'>Power Platform</option>
            </select>
          </div>
         
          <div className="form-btn">
            <Button title="Submit Form" className="form-btn"/>
          </div>
        </form>
      </div>
    </div>
  )
}
