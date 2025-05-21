import React from 'react'
import './QualityComponent.css'
import { QualityData } from './../../data/QualityData'
import TitleComponent from '../TitleComponent/TitleComponent'

const QualityComponent = () => {
  return (
    <section className='quality-sec px-64 mb-64'>
      <TitleComponent title={"Studies on mate"} />
      
      {
        QualityData.map((item, index) => (
          <div className='card-quality-sec' key={index}>
            <div className='left-side'>
              <img src={item.src} alt={item.alt} className='factory-image'/>
            </div>
            <div className='right-side'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default QualityComponent
