import './HistoryComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { HistoryData } from '../../data/HistoryData'

const HistoryComponent = () => {
  return (
    <section className='history-sec px-64 mb-64'>
        <div className="timeline">
          {
            HistoryData.map((item, index) => (
              <div className={`timeline-item ${item.position}`} key={index} style={{animationDelay: `${index}s`}}>
                <div className="timeline-icon">
                  <h2>{item.date}</h2>
                  <img src={item.img} alt="icon" />
                </div>
                <div className="timeline-content">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default HistoryComponent
