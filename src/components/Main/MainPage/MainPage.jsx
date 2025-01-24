import React from 'react';
import Searchmenu from '../SearchMenu/SearchMenu';
import RateAll from '../Rate/RateAll';
import Main_man from '../Media/Main_man.svg'
import MainStatic from '../StaticMenu/MainStatic';
import './Style/MainPage.css'



const MainPage = () => {
  return (
    <main className='main'>
      <div className='main_wr'>
        <Searchmenu /> 
        <MainStatic />  
        <img className='Main_man' src={Main_man} alt='Main_man' />
        <RateAll />
     </div> 
    </main>
  )
}

export default MainPage
