import './BrandSliderComponent.css'
import Slider from 'react-slick';
import {BrandsData} from './../../data/BrandsData';
import TitleComponent from '../TitleComponent/TitleComponent';

const BrandSliderComponent = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    centerMode: true, 
    arrows: false,
  };

  return (
    <section className='brands px-64 mb-64'>
      <div className='brands-overlay'></div>
      <div className='brands-overlay2'></div>

      <TitleComponent title={"Our Brands"} />
      {/* <Slider {...settings}>
      {
        
      }
    </Slider> */}
    <div className='brands-cards'>
        {
          BrandsData.map((item, index) => (
              <img key={index} src={item.img} alt={item.alt} />
            ))
        }
    </div>
    
    </section>
  )
}

export default BrandSliderComponent
