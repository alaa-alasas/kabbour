import { useTranslation } from "react-i18next";
import './QualityComponent.css'
import { QualityData } from './../../data/QualityData'
import TitleComponent from '../TitleComponent/TitleComponent'

const QualityComponent = () => {
    const { t } = useTranslation(); 

  return (
    <section className='quality-sec px-64 mb-64'>
      <TitleComponent title={t("StudiesOnMateTitle")} />
      
      {
        QualityData.map((item, index) => (
          <div className='card-quality-sec' key={index}>
            <div className='left-side'>
              <img src={item.src} alt={t(item.alt)} className='factory-image'/>
            </div>
            <div className='right-side'>
              <h4>{t(item.title)}</h4>
              <p>{t(item.desc)}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default QualityComponent
