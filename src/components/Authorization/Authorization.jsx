import React from 'react'
import './Style/Authorization.css'
import Logo_image from './Media/Logo_image.svg';
import Lock from './Media/Lock.svg';
import Form from './Form/Form';
import { useSelector } from 'react-redux';

const Authorization = () => {
  const Width = useSelector(state => state.app.width);
  const Shown = Width < 1270 ? true : false;
  
  return (
    <main className='NewLogin'> 
      <div className='NewLogin_wr'> 
        <div className='NewLeftBox'> 
          <h1 className='NewLogin_title'>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
          <img className='NewLogin_img' src={Logo_image} alt='Logo_image' hidden={Shown} /> 
        </div>
        <div className='NewRightBox'> 
          <img className='NewLogin_lock' src={Lock} alt='Lock' /> 
          <Form /> 
        </div>
        <img className='NewLogo_img' src={Logo_image} alt='Logo_image' hidden={!Shown} /> 
      </div>
    </main>
  );
};

export default Authorization;
