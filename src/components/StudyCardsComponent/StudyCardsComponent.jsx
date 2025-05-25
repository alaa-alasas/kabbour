import './StudyCardsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import StudyCardComponent from '../StudyCardComponent/StudyCardComponent'
import { useTranslation } from 'react-i18next'

const StudyCardsComponent = () => {
    const { t } = useTranslation();
    const studyData = t('studyData', { returnObjects: true });

  return (
    <section className='study-section px-64 mb-64'>
      <TitleComponent title={"Studies on mate"} />
      <div className='study-cards'>
        {studyData.map((item,index) => (
          <StudyCardComponent desc={item.desc} ResearchersName={item.ResearchersName} ResearchersStudy={item.ResearchersStudy}  key={index}/> 
        ))}
      </div>
    </section>
  )
}

export default StudyCardsComponent
