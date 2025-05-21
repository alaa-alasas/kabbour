import React from 'react'
import './StudyCardComponent.css'

const StudyCardComponent = ({ ResearchersName, desc, ResearchersStudy }) => {
  return (
    <div className='study-card'>
      <div className="AA-icon-container">
        <img className="AA-icon" src={'/kabbour/Icons/icon-study.svg'} alt="icon" />
      </div>
      <p>{desc}</p>
      <div className='AA-line-study'></div>
      <div className='researcher-part'> 
        <h3>{ResearchersName}</h3>
        <p>{ResearchersStudy}</p>
      </div>
    </div>
  )
}

export default StudyCardComponent
