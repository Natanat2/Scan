import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../SearchMenu/Style/SearchMenu.css';
import SershLogo from '../Media/SershLogo.svg'

const Searchmenu = () => {
  const companyInfo = useSelector((state)=>state.profile.companyInfo);
    const navigate = useNavigate();
    return (
      <div className='SearchBlock'>
        <div className='Search_leftBlock'>
          <h1 className='Search_title'>сервис по поиску публикаций <br/> о компании <br/> по его инн
          </h1>
          <p className='Search_pr'>Комплексный анализ публикаций, получение данных <br/> в формате PDF на электронную почту.
          </p>
          {companyInfo && <button 
          className='RequestBtn'
          onClick={()=>navigate('/search')}>Запросить данные</button>}
        </div>
        <div className='Search_rightBlock'>
          <img className='funMan' src={SershLogo} alt='SearchLogo' />
        </div>
      </div>   
  )
}

export default Searchmenu
