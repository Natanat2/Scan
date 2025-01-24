import React, { useState, useEffect } from 'react';
import './Style/StaticPublick.css';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { ReactComponent as RightChevron } from '../Media/right.svg';
import { ReactComponent as LeftChevron } from '../Media/left.svg';
import Period from './Period';
import Whait from '../Media/Whait.gif'

const StaticDesktop = () => {
    const [loading, setLoading] = useState(true); 
    const summary = useSelector(state => state.histograms.histogramInfo);
    const newWidth = useSelector(state => state.app.width);
    let maxSlideNumber = summary?.length > 8 ? 8 : summary?.length;
    const slidesToShow = newWidth < 700 ? 1 : maxSlideNumber;

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
                style={{ ...style, width: "30px", height: "30px", display: "block", left: "-15%"}}
                onClick={onClick}
            />
        );
    }
    function RightArrow(props) {
        const { className, style, onClick } = props;
        return (
            <RightChevron
                className={className}
                style={{ ...style, width: "30px", height: "30px",display: "block", right: "-33px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        slidesToScroll: 1,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesToShow,
        swipeToSlide: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
    };

    if (!summary || summary.length === 1) {
        return (
            <div className='greenBlock' >
                <div className='sections'>
                    <section>Период</section>
                    <section>Всего</section>
                    <section>Риски</section>
                </div>
                <div className='slider-wrapper'>
                    {summary && summary.map((period) => (
                        <Period
                            key={period.date}
                            className='periodItemCss'
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
        <div className='greenBlock' >
            <div className='sections'>
                <section>Период</section>
                <section>Всего</section>
                <section>Риски</section>
            </div>
            <div className='slider-wrapper'>
                {loading ? (
                    <div className="loading-message">
                        <img src={Whait} alt="Loading" style={{ width: "110px", height: "110px" }} /> 
                        <p>Загружаем данные...</p>
                    </div>
                ) : (
                    <Slider {...settings}>
                        {summary.map((period, ind) => (
                            <Period
                                key={period.date}
                                className='periodItemCss'
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

export default StaticDesktop;
