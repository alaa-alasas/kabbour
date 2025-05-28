import Slider from 'react-slick';
import './HeroComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent';

const HeroComponent = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ensure this is set to true
    // nextArrow: <div > 
    //   <img src="/kabbour/Icons/right.svg" alt="right-arrow" />
    // </div>,
    // prevArrow: <div >
    //   <img src="/kabbour/Icons/left.svg" alt="left-arrow" />
    // </div>,
  };


  return (
    <section className='hero mb-64'>
      <Slider {...settings}>
        <div>
          <div className="slider-content px-64">
            <img src="/kabbour/Hero/Trades.png" alt="Logo" className="logo" />
            <h3>Kabour International Group</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat libero et velit interdum, ac dictum.</p>
            <BtnComponent title={"Read More"}/>
          </div>
          <img src="/kabbour/Hero/img2.png" alt="Slide 1" className='img-slide'/>
        </div>
        <div>
          <div className="slider-content px-64">
            <img src="/kabbour/Hero/campo-logo.png" alt="Logo" className="logo" />
            <h3>Kabour International Group</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat libero et velit interdum, ac dictum.</p>
            <BtnComponent title={"Read More"}/>
          </div>
          <img src="/kabbour/Hero/img3.png" alt="Slide 2" className='img-slide'/>
        </div>
      </Slider>
    </section>
  )
}

export default HeroComponent
