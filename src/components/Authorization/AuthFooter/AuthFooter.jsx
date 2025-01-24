import React from 'react';
import google from '../Media/google.svg';
import yandex from '../Media/yandex.svg';
import facebook from '../Media/facebook.svg';
import './Style/AuthFooter.css';



const AuthFooter = () => {
  return (
    <div className='formFooterContainer'>
      <section className='formFooterSection'>Войти через:</section>
      <div className='formFooterBox'>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='xxx'>
            <img src={google} alt='GoogleLink' />
          </a>
        </div>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='xxx'>
            <img src={facebook} alt='Facebook' />
          </a> 
        </div>
        <div className='formFooterBoxItem'>
          <a className='formFooterBoxLink' href='xxx'>
            <img src={yandex} alt='Yandex' />
          </a> 
        </div>
      </div> 
    </div>
  )
}

export default AuthFooter