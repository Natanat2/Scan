import React, {useEffect} from 'react';
import Header from './Header/Header'
import Footer from'./Footer/Footer'
import Main from './Main/Main';
import './Style/App.css'

import { setScreenWidth } from '../components/Requests/app';
import {getCompanyInfo} from '../components/Requests/profile'

import { useDispatch, useSelector } from 'react-redux';


function App() {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken && !companyQuantityInfo){
      dispatch(getCompanyInfo())
    }
  },[dispatch, companyQuantityInfo])
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
