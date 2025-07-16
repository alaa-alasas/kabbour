import Slider from 'react-slick';
import './SubHeroComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent';
import { useTranslation } from 'react-i18next';

const SubHeroComponent = () => {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Ensure this is set to true
  };


  return (
    <section className='sub-hero px-64 mb-64'>
      <Slider {...settings}>
        <div>
          <img src="/SubHero/10.webp" alt="Slide 1" className='img-slide'/>        
        </div>
        <div>
          <img src="/SubHero/9.webp" alt="Slide 1" className='img-slide'/>        
        </div>
        <div>
          <img src="/SubHero/7.webp" alt="Slide 1" className='img-slide'/>        
        </div>
        <div>
          <img src="/SubHero/8.webp" alt="Slide 2" className='img-slide'/>        
        </div>
        <div>
          <img src="/SubHero/6.webp" alt="Slide 3" className='img-slide'/>        
        </div>
        <div>
          <img src="/SubHero/1.webp" alt="Slide 4" className='img-slide'/>        
        </div>
        <div>
          <img src="/SubHero/2.webp" alt="Slide 5" className='img-slide'/>        
        </div>
      </Slider>
      <TitleComponent 
        title={t("subHeroTitle")}
        desc={t("subHeroDesc")}
      />
    </section>
  )
}

export default SubHeroComponent
