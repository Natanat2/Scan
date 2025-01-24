import React, { useState, useEffect } from 'react';
import './Style/StaticPublick.css';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { ReactComponent as RightChevron } from '../Media/right.svg';
import { ReactComponent as LeftChevron } from '../Media/left.svg';
import Period from './Period';
import Whait from '../Media/Whait.gif';

const StaticMobile = () => {
    const [loading, setLoading] = useState(true); 
    const summary = useSelector(state => state.histograms.histogramInfo);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            setLoading(false); 
        };

        fetchData();
    }, []);

    function LeftArrow(props) {
        const { className, style, onClick } = props;
        return (
            <LeftChevron 
                className={className}
                style={{ ...style}}
                onClick={onClick}
            />
        );
    }
    function RightArrow(props) {
        const { className, style, onClick } = props;
        return (
            <RightChevron 
                className={className}
                style={{ ...style}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        slidesToScroll: 1,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        swipeToSlide: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
    };

    
    if (!summary || summary.length === 1) {
        return (
            <div className='blockMobile' >
                <div className='sectionsMobile'>
                    <section className='sectionsMobile__item'>Период</section>
                    <section className='sectionsMobile__item'>Всего</section>
                    <section className='sectionsMobile__item'>Риски</section>
                </div>
                <div className='slider-wrapperMobile'>
                    {summary && summary.map((period) => (
                        <Period
                            key={period.date}
                            className='periodItemCssMobile'
                            date={period.date}
                            total={period.total}
                            risk={period.risk}
                        />
                    ))}
                </div>          
            </div>
        );
    }

    return (
        <div className='blockMobile' >
            <div className='sectionsMobile'>
                <section className='sectionsMobile__item'>Период</section>
                <section className='sectionsMobile__item'>Всего</section>
                <section className='sectionsMobile__item'>Риски</section>
            </div>
            <div className='slider-wrapperMobile'>
                {loading ? (
                    <div className="loading-message">
                        <img src={Whait} alt="Loading" style={{ width: "50px", height: "50px" }} /> 
                        <p>Загружаем данные...</p>
                    </div>
                ) : (
                    <Slider {...settings}>
                        {summary.map((period) => (
                            <Period
                                key={period.date}
                                className='periodItemCssMobile'
                                date={period.date}
                                total={period.total}
                                risk={period.risk}
                            />
                        ))}
                    </Slider>
                )}
            </div>          
        </div>
    );
}

export default StaticMobile;
