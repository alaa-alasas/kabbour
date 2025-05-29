import './BrandSliderComponent.css'
import {BrandsData} from './../../data/BrandsData';
import TitleComponent from '../TitleComponent/TitleComponent';
import { useTranslation } from 'react-i18next';

const BrandSliderComponent = () => {
  const { t } = useTranslation(); 
  
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

      <TitleComponent title={t("BrandTitle")} />
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
