import React from 'react';
import './Style/RateAll.css';
import Rate from './Rate';

const RateAll = () => {
  return (
    <div className='tariff-container'>
      <h1 className='tariff-title'>
        наши тарифы
      </h1>
      <Rate />
    </div>
  )
}

export default RateAll;