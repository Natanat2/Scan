import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Header.status/Style/Header.logout.css'
import Slash from  '../Media/Slash.svg'

function LoginButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <button className='NewAccountPanelButton' type="button" onClick={handleClick}> 
      Войти
    </button>
  );
}

const Headerlogout = () => {
  return (
    <div className='NewAccountPanel'> 
        <a className='NewAccountPanelLink' href='xxx'>Зарегистрироваться</a> 
        <img className='NewAccountPanelVerticalSlash' src={Slash} alt='verticalSlash' /> 
        <LoginButton />
    </div> 
  );
}

export default Headerlogout;
