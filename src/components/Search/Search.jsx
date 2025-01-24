import React from 'react';
import SearchForm from './SearchForm/SearchForm'
import './Style/Search.css'
import Search_img from '../Search/Media/Search.svg'
import Doc from './Media/Doc.svg'
import Card from './Media/Card.svg'


const Search = () => {
  return (
    <main className='main_search'>
      <div className='main__wrapper_search'>
        <div className='main__left-box'>
          <h1 className='main_header'>Найдите необходимые данные в пару кликов.</h1>
          <section className='Sections'>Задайте параметры поиска.<br></br> 
              Чем больше заполните, тем точнее поиск
          </section>
          <SearchForm />
        </div>
        <div className='main__right-box'>
          <div className='upper-imgs'>
            <img src={Doc} alt='document' />         
            <img src={Card} alt='folders' />
          </div>
          <div>
            <img className='searchBarImg' src={Search_img} alt='searchBar' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Search
