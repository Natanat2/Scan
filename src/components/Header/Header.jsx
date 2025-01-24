import React from 'react';
import './Style/Header.css'
import { useSelector } from 'react-redux';
import Text from './Text'
import logo from './Media/Logo.svg';
import Headerlogout from './Header.status/Header.logout';
import MobileHeader from './MobileHeader/MobileHeader'
import Login from './Header.status/Header.Login';
import Profile from './Header.status/Profile/Profile';

function Header() {
  const accountInfo = useSelector((state)=>state.profile.companyInfo);
  const Logins = accountInfo ? <Login /> : null;
  const Prof = accountInfo ? <Profile /> : <Headerlogout />;
  return (
    <header className='NewHeader'> 
      <div className='NewHeaderWrapper'> 
        <div className='NewLogo'> 
          <img src={logo} alt='logo' />
        </div>
        <Text />
        {Logins}
        {Prof}
        <MobileHeader />
      </div>
    </header>
  );
}

export default Header;
