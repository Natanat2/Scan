import React from "react";
import Slider from "react-slick";
import clock from'../Media/clock.svg';
import lens from'../Media/lens.svg';
import shield from '../Media/shield.svg';
import { ReactComponent as RightChevron } from '../Media/right.svg';
import { ReactComponent as LeftChevron } from '../Media/left.svg';
import { useSelector } from 'react-redux';
import "../StaticMenu/Style/StaticMenu.css"

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightChevron
      className={className}
      style={{ ...style, width: "50px", height: "50px", marginRight: "-15px"}}
      onClick={onClick}
    />
  );
}
function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftChevron
      className={className}
      style={{ ...style, width: "50px", height: "50px", marginLeft: "-15px"}}
      onClick={onClick}
    />
  );
}
const StaticMenu = () => {
  const newWidth = useSelector(state => state.app.width)
  
  const slidesToShow = newWidth < 1100 ? 1 : 3;
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
    return (
      <div>
        <h2 className="Static_title">почему именно мы</h2>
        <div className="Static">
          <Slider {...settings}>
            <div>
              <div className="Static_card">
                <img className="card_img" src={clock} alt='clock' />
                <section className="Static_section">Высокая и оперативная скорость обработки заявки</section>
              </div>
            </div>
            <div>
              <div className="Static_card">
                <img className="card_img" src={lens} alt='clock' />
                <section className="Static_section">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</section>
              </div>
            </div>
            <div>
              <div className="Static_card">
                <img className="card_img" src={shield} alt='clock' />
                <section className="Static_section">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</section>
              </div>
            </div>
            <div>
              <div className="Static_card">
                <img className="card_img" src={clock} alt='clock' />
                <section className="Static_section">Наше лучшее качество это наша скорость</section>
              </div>
            </div>         
          </Slider>
        </div>
        
      </div>
    );
  }
export default StaticMenu;
