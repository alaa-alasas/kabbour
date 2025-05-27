import './CentersComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { CentersData } from '../../data/CentersData'
import CenterCardComponent from '../CenterCardComponent/CenterCardComponent'

const CentersComponent = () => {

  return (
    <section className='centers-section px-64 mb-64'>
      <div className='centers-title-section'>
        <TitleComponent 
          title={"مراكز التوزيع داخل سوريا"} 
          desc={"تصدر مجموعة كبور الدولية منتجاتها إلى مختلف المحافظات داخل سوريا، يمكنكم التواصل مع مراكزنا عن طريق الأرقام التالية"}
        />
        <img src="/kabbour/Distribution/syria.png" alt="syria" className='map-syria'/>
      </div>
      
      <div className='center-cards'>
        {
          CentersData.map((item,index) => (
            <CenterCardComponent key={index} 
              centerName={item.centerName}
              location={item.location}
              phone={item.phone}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CentersComponent
