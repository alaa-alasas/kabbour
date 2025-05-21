import React from 'react'
import './StudyCardsComponent.css'
import {StudyData} from './../../data/StudyData'
import TitleComponent from '../TitleComponent/TitleComponent'
import StudyCardComponent from '../StudyCardComponent/StudyCardComponent'

const StudyCardsComponent = () => {
  return (
    <section className='study-section px-64 mb-64'>
      <TitleComponent title={"Studies on mate"} />
      <div className='study-cards'>
        {StudyData.map((item,index) => (
          <StudyCardComponent desc={item.desc} ResearchersName={item.ResearchersName} ResearchersStudy={item.ResearchersStudy}  key={index}/> 
        ))}
      </div>
    </section>
  )
}

export default StudyCardsComponent
