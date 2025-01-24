import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Style/Header.Login.css';
import { getCompanyInfo } from '../../Requests/profile';
import Wait from '../Media/whait.svg';

const Login = () => {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (!companyQuantityInfo) {
      const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        setIsLoading(false);
        dispatch(getCompanyInfo());
      };
      fetchData();
    }
  }, [companyQuantityInfo, dispatch]);

  if (isLoading || !companyQuantityInfo) {
    return (
      <div className='Load'>
        <img className='Img_load' src={Wait} alt='Load' />
      </div>
    ); 
  }

  console.log('Использовано компаний:', companyQuantityInfo.eventFiltersInfo.usedCompanyCount);
  console.log('Лимит по компаниям:', companyQuantityInfo.eventFiltersInfo.companyLimit);

  return (
    <div className='NewCompanyBox'> 
      <div>
        <span className='NewCompanyBox__usedCompany'>Использовано компаний</span>
        <span className='NewCompanyBox__black'>{companyQuantityInfo.eventFiltersInfo.usedCompanyCount}</span>
      </div>
      <div>
        <span className='NewCompanyBox__usedCompany'>Лимит по компаниям</span> 
        <span className='NewCompanyBox__green'>{companyQuantityInfo.eventFiltersInfo.companyLimit}</span>
      </div>
    </div>
  );
}

export default Login;
