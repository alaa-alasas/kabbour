import Slider from 'react-slick';
import './SubHeroComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent';

const SubHeroComponent = () => {

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
          <img src="/kabbour/SubHero/1.png" alt="Slide 1" className='img-slide'/>        
        </div>
        <div>
          <img src="/kabbour/SubHero/2.png" alt="Slide 2" className='img-slide'/>        
        </div>
        <div>
          <img src="/kabbour/SubHero/3.png" alt="Slide 3" className='img-slide'/>        
        </div>
        <div>
          <img src="/kabbour/SubHero/4.png" alt="Slide 4" className='img-slide'/>        
        </div>
      </Slider>
      <TitleComponent 
        title={"مجموعة كبور الدولية"}
        desc={"شركة رائدة في إنتاج وتصنيع وتوزيع المتة على مستوى سوريا والوطن العربي، لها معامل في الأرجنتين وسوريا وتتبع أعلى درجات التعقيم وتستخدم التكنولوجيا لإنتاج أفضل مشروب"}
      />
    </section>
  )
}

export default SubHeroComponent
