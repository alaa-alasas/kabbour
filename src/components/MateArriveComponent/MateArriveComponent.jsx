import './MateArriveComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { MateArriveData } from '../../data/MateArriveData'

const MateArriveComponent = () => {
  return (
    <section className='mate-arrive-sec px-64 mb-64'>
      <TitleComponent 
        title={"كيف تصل المتة إليك؟"}
        desc={"تمر المتة ابتداءً من زراعتها وقطافها وحتى وصولها للمستهلك بسلسلة طويلة من المراحل لتحصل بنتيجتها على المنتج النهائي لأفضل مشروب."}
      />
        <div className="mate-arrive-phases">
          {
            MateArriveData.map((item, index) => (
              <div className={`mate-arrive-row`} key={index}>
                {
                  item.map((card,index2) => (
                    card.id == 10 ? 
                     (
                      <>
                      <div  className='mate-arrive-card left-line'>
                      </div>
                      <div key={index2} className='mate-arrive-card'>
                        <img src={card.img} alt="" />
                        <h4>{card.title}</h4>
                        <p>{card.desc}</p>
                      </div>
                      <div className='mate-arrive-card right-line'>
                      </div>
                    </>

                    )
                    :  (
                    <div key={index2} className='mate-arrive-card'>
                      <img src={card.img} alt="" />
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                    </div>)
                  ))
                }
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default MateArriveComponent
