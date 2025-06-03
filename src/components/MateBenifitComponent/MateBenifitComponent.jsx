import './MateBenifitComponent.css'
import {MateBenifitData} from '../../data/MateBenifit'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageDirectionContext } from '../../context/LanguageDirectionContext';

const MateBenifitComponent = () => {
    const { t } = useTranslation();
    const { direction } = useContext(LanguageDirectionContext);
  
  return (
    <section className='mate-benifit px-64 mb-64'>         
      <div className='right-side' style={{
      [direction === 'rtl' ? 'paddingRight' : 'paddingLeft']: '24px',
    }}>
        <h3>{t("MateBenifitTitle")}</h3>
        <ul>
          {MateBenifitData.map((item,index) => (
            <li key={index}>{t(item)}</li> 
          ))}
        </ul>
      </div>  
      <div className='left-side'>
        <img src="/kabbour/MateBenifit/img.png" alt="" />
      </div>  
    </section>
  )
}

export default MateBenifitComponent
