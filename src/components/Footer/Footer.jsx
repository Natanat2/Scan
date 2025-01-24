import React from 'react'
import  './Style/Footer.css'
import logo from './Media/Logo_footer.svg';


const Footer = () => {
  return (
    <footer className='NewFooter'> 
      <div className='NewFooter_wr'> 
        <img src={logo} alt='logo' />
        <div className='NewFooter_Info'> 
          <div>г. Москва, Цветной б-р, 40</div>
          <div>+7 495 771 21 11</div>
          <div>info@skan.ru</div>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
