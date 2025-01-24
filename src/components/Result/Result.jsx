import React from 'react';
import './Style/Result.css';
import Search from './Media/Searsh.svg';
import { useSelector } from 'react-redux';
import PublicationCards from './Publication/Publication'
import StaticMobile from './StaticPublic/StaticMobile';
import StaticDesktop from './StaticPublic/StaticPublick';


const ResultPage = () => {
  let Docs = useSelector(state => state.histograms.histogramInfo)
  const newWidth = useSelector(state => state.app.width)
  const isMobile = newWidth < 700
  const ChosenCarousel = isMobile ? StaticMobile : StaticDesktop
 
  return (
    <main className='resultMain'>
      <div className='resultMain__wrapper'>  
        <div className='resultMain__upper'>
          <div className='upper__box'>
            <div className='upper__title'>Ищем. Скоро будут результаты</div>
            <section>Поиск может занять некоторое время, просим сохранять терпение.</section>
          </div>
          <div className='img__box'>
            <img src={Search} alt='aim'/>
          </div>
        </div>
        <div className='resultMain__middle'>
          <div className='upper__box'>
            <h1 className='upper__title upper__title_middle'>Общая сводка</h1>
            <section className='resultMain__section'>Найдено {Docs?.length||0} варианта(ов)</section>
          </div>
          <ChosenCarousel /> 
        </div>
        <div className='resultMain__lower'>
          <div className='lower__box'>
            <h1 className='upper__title upper__title_middle'>cписок документов</h1>
            <PublicationCards />
          </div>
        </div>
      </div>  
    </main>
  )
}

export default ResultPage
