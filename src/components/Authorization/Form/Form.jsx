import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Inputs from '../Input/Input';
import './Style/Form.css' 
import AuthFooter from '../AuthFooter/AuthFooter';
import { dropStatus, signIn } from '../../Requests/profile';

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInStatus = useSelector(state => state.profile.status);
  
  useEffect(() => {
    if (signInStatus === 'done') {
      navigate("/");
      dispatch(dropStatus());
    }
    if (signInStatus === 'error') {
      setError(true);
    }
  }, [error, signInStatus, navigate, dispatch]);
  
  const handleSubmit = async () => {
    dispatch(signIn({
      login,
      password
    }));
  };
  
  const submitDisable = !(login && password);
  
  return (
    <div className='NewForm'> 
      <div className='NewForm_Box'> 
        <a className='NewForm_link' href='xxx' >Войти</a> 
        <a className='NewForm_link NewForm_link_noactive' href='xxx'>Зарегистрироваться</a> 
      </div>
      <Inputs 
        login={login} 
        password={password} 
        setLogin={setLogin} 
        setPassword={setPassword}
        error={error}
      />
      <button 
        className='NewButton' 
        onClick={handleSubmit} 
        disabled={submitDisable}
        style={submitDisable ? {opacity: '50%'} : {opacity: '100%'}}
      >
        Войти
      </button>
      <a className='NewForm_nopass' href='xxx' >Восстановить пароль</a> 
      <AuthFooter />
    </div>
  );
};

export default Form;
