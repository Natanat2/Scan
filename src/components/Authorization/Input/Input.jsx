import React from 'react'
import './Style/Input.css'


const Inputs = ({ login, password, setLogin, setPassword, error }) => {
  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };
  const handleLogin = (evt) => {
    setLogin(evt.target.value);
  };
  const visibility = error ? 'visible' : 'hidden';
  const inputColor = error ? 'red' : '#C7C7C7';
  return (
    <form className='NewInput'> 
      <label className='NewInput_label' htmlFor='login'>Логин или номер телефона:</label> 
      <input className='NewLoginInput' onChange={handleLogin} id='login' type='text' /> 
      <label className='NewInput_label' htmlFor='password'>Пароль:</label> 
      <input
        className='NewLoginInput'
        onChange={handlePassword}
        id='password'
        type='password'
        style={{ borderColor: inputColor }}
      /> 
      <span className='NewForm__errText' style={{ visibility }}>Неправильный пароль</span> 
    </form>
  );
};

export default Inputs;
