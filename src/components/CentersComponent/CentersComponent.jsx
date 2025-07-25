import './CentersComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import CenterCardComponent from '../CenterCardComponent/CenterCardComponent'
import { useTranslation } from 'react-i18next'
import SyriaMap from '../SyriaMap/SyriaMap'

const CentersComponent = () => {
  const { t } = useTranslation();

  return (
    <section className='centers-section px-64 mb-64'>
      <div className='centers-title-section'>
        <TitleComponent 
          title={t("centerTitle")} 
          desc={t("centerDesc")}
        />
        <SyriaMap />
      </div>
      
      <div className='center-cards'>
        {
          t("centers",{ returnObjects: true }).map((item,index) => (
            <CenterCardComponent key={index} 
              centerName={t(item.name)}
              location={t(item.location)}
              phone={item.phone}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CentersComponent
