import './MateArriveComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { useTranslation } from 'react-i18next';
import { getMateArriveData } from '../../data/MateArriveData';
import { useContext } from 'react';
import { LanguageDirectionContext } from '../../context/LanguageDirectionContext';

const MateArriveComponent = () => {
  const { t } = useTranslation();
  const data = getMateArriveData(t);
  const { direction } = useContext(LanguageDirectionContext);
  
  return (
    <section className='mate-arrive-sec px-64 mb-64'>
      <TitleComponent 
        title={t("mateArriveTitle")}
        desc={t("mateArriveDesc")}
      />
        <div className="mate-arrive-phases">
          {
            data.map((item, index) => (
              <div className={`mate-arrive-row`} key={index}>
                {
                  item.map((card,index2) => (
                    card.id == 10 ? 
                     (
                      <>
                      <div className={`${direction == 'rtl' ? 'mate-arrive-card-right' : 'mate-arrive-card-left'} line`}>
                      </div>
                      <div key={index2} className={`${direction == 'rtl' ? 'mate-arrive-card-right' : 'mate-arrive-card-left'} `} >
                        <img src={card.img} alt="" />
                        <div className='mate-arrive-desc'>
                          <h4>{card.title}</h4>
                          <p>{card.desc}</p>
                        </div>
                      </div>
                      <div className={`${direction == 'rtl' ? 'mate-arrive-card-right' : 'mate-arrive-card-left'} line`}>
                      </div>
                    </>
                    )
                    :  (
                    <div key={index2} className={`${direction == 'rtl' ? 'mate-arrive-card-right' : 'mate-arrive-card-left'}`}>
                      <img src={card.img} alt="" />
                      <div className='mate-arrive-desc'>
                        <h4>{card.title}</h4>
                        <p>{card.desc}</p>
                      </div>
                    </div>)
                  ))
                }
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default MateArriveComponent
