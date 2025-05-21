import './InfoAboutComponent.css'
import { InfoAboutCompany } from '../../data/InfoAboutCompany'

const InfoAboutComponent = () => {

  return (
    <section className='info-about-section px-64 mb-64'>
      <div className='info-cards'>
        {
          InfoAboutCompany.map((item,index) => (
            <div className='info-card' key={index}>
              <img src={item.img} alt="img" />
              <p>{item.info}</p>
            </div>
          ))
        }
      </div> 
    </section>
  )
}

export default InfoAboutComponent
