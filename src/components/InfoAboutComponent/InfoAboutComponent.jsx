import './InfoAboutComponent.css'
import { InfoAboutCompany } from '../../data/InfoAboutCompany'
import { useTranslation } from 'react-i18next';

const InfoAboutComponent = () => {
  const { t } = useTranslation();

  return (
    <section className='info-about-section px-64 mb-64'>
      <div className='info-cards'>
        {
          InfoAboutCompany.map((item,index) => (
            <div className='info-card' key={index}>
              <img src={item.img} alt="img" />
              <p>{t(item.info)}</p>
            </div>
          ))
        }
      </div> 
    </section>
  )
}

export default InfoAboutComponent
