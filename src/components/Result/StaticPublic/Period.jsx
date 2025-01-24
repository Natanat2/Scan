import React from 'react';
import './Style/StaticPublick.css'

const Period = ({ date, risk, total, ...rest }) => {
  const dateObj = new Date(date);
  const customDate =`${dateObj.getMonth() + 1}.${dateObj.getFullYear()}`
  return (
    <div {...rest}>
      <div className='period__item'>
        <div className='period__text'>{customDate}</div>
      </div>
      <div className='period__item'>
        <div className='period__text'>{total}</div>
      </div>
      <div className='period__item'>
        <div className='period__text'>{risk}</div>
      </div>
    </div>
  )
}

export default Period;
