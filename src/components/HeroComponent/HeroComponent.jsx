import Slider from 'react-slick';
import './HeroComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent';

const HeroComponent = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ensure this is set to true
    nextArrow: <div > 
      <img src="/Icons/right.svg" alt="right-arrow" />
    </div>,
    prevArrow: <div >
      <img src="/Icons/left.svg" alt="left-arrow" />
    </div>,
  };


  return (
    <section className='hero mb-64'>
      <Slider {...settings}>
        <div>
          <img src="/Hero/img2.png" alt="Slide 1" className='img-slide'/>
          <div className="slider-content px-64">
            <img src="/Hero/logo.png" alt="Logo" className="logo" />
            <h3>Kabour International Group</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat libero et velit interdum, ac dictum.</p>
            <BtnComponent title={"Read More"}/>
          </div>
        </div>
        <div>
          <img src="/Hero/img2.png" alt="Slide 2" className='img-slide'/>
          <div className="slider-content px-64">
            <img src="/Hero/logo.png" alt="Logo" className="logo" />
            <h3>Kabour International Group</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat libero et velit interdum, ac dictum.</p>
            <BtnComponent title={"Read More"}/>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </section>
  )
}

export default HeroComponent
