import './InfoAboutComponent.css'
import { InfoAboutCompany } from '../../data/InfoAboutCompany'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeModeContext } from '../../context/ThemeModeContext';

const InfoAboutComponent = () => {
  const { t } = useTranslation();
  const { mode } = useContext(ThemeModeContext);

  return (
    <section className='info-about-section px-64 mb-64'>
      <div className='info-cards'>
        {
          InfoAboutCompany.map((item,index) => (
            <div className='info-card' key={index}>
              <img src={`${item.img}${mode}.webp`} alt="img" />
              <p>{t(item.info)}</p>
            </div>
          ))
        }
      </div> 
    </section>
  )
}

export default InfoAboutComponent
