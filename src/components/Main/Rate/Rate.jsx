import React from 'react';
import { useSelector } from "react-redux";
import './Style/Rate.css';
import lamp from '../Media/Lamp.svg';
import arrow from '../Media/Arrow.svg';
import bissnes from '../Media/Bissnes.svg';

const Rate = () => {
  const companyInfo = useSelector(state => state.profile.companyInfo);
  const tariffElement = companyInfo ? 'Текущий тариф' : 'Выгодно';
  const tariffStyle = companyInfo ? 'Перейти в личный кабинет' : 'Подробнее';
  const btnColor = companyInfo ? 'btn_active' : 'card__btn';

  return (    
    <div className='tariffCards'>
      <div className='tariffCards__card tariffCards__card_beginner'>
        <div className='card__box'>
          <div className='card__title'>
            <h1>Beginner</h1>
            <section>Для небольшого исследования</section>
          </div>
          <div className='lamp'>
            <img src={lamp} alt='lamp' />
          </div> 
        </div>        
        <div className='card__body card__body_beginner'>          
          <span className='card__actual-tariff'>{tariffElement}</span>          
                     
            <h2 className='card__price'>799 ₽<span className='card__old-price'>1 200 ₽</span></h2>
            <section className='card__price-explanation'>или 150 ₽/мес. при рассрочке на 24 мес.</section>
            <h3 className='card__list'>В тариф входит:</h3>
            <ul>
              <li className='card__list-item'>Безлимитная история запросов</li>
              <li className='card__list-item'>Безопасная сделка</li>
              <li className='card__list-item'>Поддержка 24/7</li>
            </ul>
            <button className={btnColor}>{tariffStyle}</button>
        </div>
      </div>
      <div className='tariffCards__card tariffCards__card_pro'>
      <div className='card__box'>
          <div className='card__title'>
            <h1>Pro</h1>
            <section>Для HR и фрилансеров</section>
          </div>
          <div className='aim'>
            <img src={arrow} alt='aim' />
          </div> 
        </div>        
        <div className='card__body card__body_aim'>
            <span className='card__actual-tariff' style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className='card__price'>1299 ₽<span className='card__old-price'>2600 ₽</span></h2>
            <section className='card__price-explanation'>или 279 ₽/мес. при рассрочке на 24 мес.</section>
            <h3 className='card__list'>В тариф входит:</h3>
            <ul>
              <li className='card__list-item'>Все пункты тарифа Begginer</li>
              <li className='card__list-item'>Экспорт истории</li>
              <li className='card__list-item'>Рекомендации по приоритетам</li>
            </ul>
            <button className='card__btn'>Подробнее</button>
        </div>
      </div>
      <div className='tariffCards__card tariffCards__card_business'>
      <div className='card__box'>
          <div className='card__title'>
            <h1>Business</h1>
            <section>Для корпоративных клиентов</section>
          </div>
          <div className='laptop'>
            <img src={bissnes} alt='laptop' />
          </div> 
        </div>        
        <div className='card__body card__body_business'>
            <span className='card__actual-tariff' style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className='card__price'>2379 ₽<span className='card__old-price'>3700 ₽</span></h2>

            <h3 className='card__list_bissnes'>В тариф входит:</h3>
            <ul>
              <li className='card__list-item'>Все пункты тарифа Pro</li>
              <li className='card__list-item'>Безлимтоное коллисчество запросов</li>
              <li className='card__list-item'>Приорететная поддержка</li>
            </ul>
            <button className='card__btn'>Подробнее</button>
        </div>
      </div>
    
    </div>
  );
}

export default Rate;
