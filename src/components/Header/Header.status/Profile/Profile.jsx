import React from 'react'
import {useNavigate} from 'react-router-dom';
import avatar from '../../Media/avatar.svg'
import './Profile.css';
import { signOut } from '../../../Requests/profile';
import { useDispatch } from 'react-redux';


function ExitButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick() {
    navigate("/login");
    dispatch(signOut());
  } 
  return (
    <button className='NewAvatarButton' type="button" onClick={handleClick}> 
      Выйти
    </button>
  );
}

const Profile = () => {
  return (
    <div className='NewAvatar'>
      <div className='NewAvatarContent'> 
        <span>Алексей К.</span>
        <ExitButton />
      </div>
      <div className='NewAvatarImg'> 
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}

export default Profile;
