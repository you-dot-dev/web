import React, {useState} from 'react';
import youDevLogo from "../images/you-dev-header-logo.png";
import axios from "axios";

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const sendMail = async () => {

    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (validEmail.test(email)) {
      const response = await axios.post("http://localhost:7890/mail/signup", {
        email
      });
    } else {
      alert("Not a valid email!");
    }
    
    

  }

  return (

<footer class="footer">
  <div class="footer__addr">
    <img src={youDevLogo} alt="youdev logo"/>
   
      <p>Subscribe to our monthly newsletter</p>
      <input value={email} onChange={(e) => handleChange(e)} type='email' placeholder='Enter Email'/>
      <button onClick={() => sendMail()} >Subscribe</button>

  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Products</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Skillmap</a>
        </li>

        <li>
          <a href="#">Video References</a>
        </li>
            
        <li>
          <a href="#">Misc</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Developers</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">API Reference</a>
        </li>
        
        <li>
          <a href="#">Badging</a>
        </li>
        
        <li>
          <a href="#">Blog</a>
        </li>
        
        <li>
          <a href="#">Careers</a>
        </li>
        
      
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2021 YouDev. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Los Gatos, CA.</span>
    </div>
  </div>
</footer>
  )
}

export default Footer;