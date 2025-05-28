import './AboutComponent.css'
import { AboutFactoryData } from './../../data/AboutFactoryData'
import TitleComponent from '../TitleComponent/TitleComponent'
import BtnComponent from '../BtnComponent/BtnComponent'
import { useTranslation } from "react-i18next";

const AboutComponent = () => {
    const { t } = useTranslation(); // Hook لجلب الترجمات

  return (
    <section className='about-factory px-64 mb-64'>
      <TitleComponent title={t("AboutTitle")} />
      
      {
        AboutFactoryData.map((item, index) => (
          <div className='card-about-factory' key={index} data-aos="flip-right">
            <div className='left-side'>
              <img src={item.src} alt={t(item.alt)} className='factory-image'/>
              <a href={item.url} className='video-link' target='_blank'>
                <img src="/kabbour/Icons/VideoPlay.svg" alt="video" />
              </a>
            </div>
            <div className='right-side'>
              <h4>{t(item.title)}</h4>
              <p>{t(item.desc)}</p>
              <BtnComponent title={t("ReadMore")}/>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default AboutComponent
