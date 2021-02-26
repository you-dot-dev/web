import React from 'react';
import youDevLogo from "../images/you-dev-header-logo.png";

const Footer = () => {
  return (

<footer class="footer">
  <div class="footer__addr">
    <img src={youDevLogo} alt="youdev logo"/>
        
    <h2>Contact</h2>
    
    <address>
      P.O Box 123456<br/>
          
      <a class="footer__btn" href="mailto:paul@you.dev">Email Us</a></address>
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