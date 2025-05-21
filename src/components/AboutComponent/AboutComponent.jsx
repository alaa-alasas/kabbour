import './AboutComponent.css'
import { AboutFactoryData } from './../../data/AboutFactoryData'
import TitleComponent from '../TitleComponent/TitleComponent'
import BtnComponent from '../BtnComponent/BtnComponent'

const AboutComponent = () => {
  return (
    <section className='about-factory px-64 mb-64'>
      <TitleComponent title={"About Our Company"} />
      
      {
        AboutFactoryData.map((item, index) => (
          <div className='card-about-factory' key={index} data-aos="flip-right">
            <div className='left-side'>
              <img src={item.src} alt={item.alt} className='factory-image'/>
              <a href={item.url} className='video-link' target='_blank'>
                <img src="/kabbour/Icons/VideoPlay.svg" alt="video" />
              </a>
            </div>
            <div className='right-side'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <BtnComponent title={"Read More"}/>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default AboutComponent
