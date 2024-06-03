import React from 'react'
import Logo from './../../assets/images/logo.svg'
import './Footer.css'
import Button from '../Button/Button'
import { FaFacebook} from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
    <div className='footer_items'>
        <div className='footer-left'>
            <div className="footer_max_log">
                <div className="foot_log_img_container">
                    <img src={Logo} alt="image of a logo" width="100%" height="100%"/>
                </div>
            </div>
            <p>Stay Up to date with us</p>
            <p>Join our newsletter for regular updates.</p>
            <form>
            <label htmlFor="email">Your email</label>
            <div className='form_div'>
                <input type="email" placeholder='example@gmail.com' id='email' />
                <Button title="Subscribe"/>
            </div>
            </form>
        </div>
        <div className="footer_right">
            <div className="footer_links">
                <h1>All Links</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/leadership">Leadership</a></li>
                    <li><a href="/tracks">Tracks</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
            </div>
        </div>
        <div className="social_media">
            <div className="media_container">
                <h1>Follow us on</h1>
                <div className="media_img">
                    <FaFacebook className='social_icons' size={30}/>
                    <p>Facebook</p>
                </div>
                <div className="media_img">
                    <FaXTwitter className='social_icons' size={30}/>
                    <p>Follow X</p>
                </div>
                <div className="media_img">
                    <FaInstagramSquare className='social_icons' size={30}/>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    </div>
    <p className='copyright'>&copy; || All Rights Reserved</p>
    </footer>
  )
}
