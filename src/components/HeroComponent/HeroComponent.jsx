import Slider from 'react-slick';
import './HeroComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent';
import { useTranslation } from 'react-i18next';
import { getHeroSliderData } from '../../data/HeroData';
import { useContext } from 'react';
import { LanguageDirectionContext } from '../../context/LanguageDirectionContext';
import { useNavigate } from 'react-router-dom';

const HeroComponent = () => {
  const { t } = useTranslation();
  const sliderData = getHeroSliderData(t);
  const { direction } = useContext(LanguageDirectionContext);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle button click and navigate to the specified route
  const handleClick = () => {
    navigate(`/about`); // Navigate to the route specified in the `to` prop
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ensure this is set to true
    // nextArrow: <div > 
    //   <img src="/Icons/right.svg" alt="right-arrow" />
    // </div>,
    // prevArrow: <div >
    //   <img src="/Icons/left.svg" alt="left-arrow" />
    // </div>,
  };


  return (
    <section className='hero mb-64'>
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div className={`${direction === 'rtl' ? 'slider-content-right' : 'slider-content-left' } px-64`} >
              <img src={slide.logo} alt={slide.logoAlt} className="logo" />
              <h3>{slide.title}</h3>
              {/* <p>{slide.description}</p> */}
              <BtnComponent title={slide.buttonText}  handleClick={handleClick}/>
            </div>
            <img src={slide.image} alt={slide.imageAlt} className="img-slide" />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default HeroComponent
