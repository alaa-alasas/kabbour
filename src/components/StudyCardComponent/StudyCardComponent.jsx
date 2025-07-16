import './StudyCardComponent.css'
import { FaQuoteRight } from "react-icons/fa";

const StudyCardComponent = ({ ResearchersName, desc, ResearchersStudy }) => {
  return (
    <div className='study-card'>
      <div className="AA-icon-container">
        <FaQuoteRight className="AA-icon" />
        {/* <img className="AA-icon" src={'/Icons/icon-study.svg'} alt="icon" /> */}
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
