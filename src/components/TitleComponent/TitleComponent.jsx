import './TitleComponent.css';

const TitleComponent = ({title,desc}) => {
  return (
    <div className='AA-title'>
      <h3 className='AA-title-heading'>
        {title}
      </h3>
      {
        desc && 
        <p className='AA-title-desc'>
          {desc}
        </p>
      }
    </div>
    
  )
}

export default TitleComponent
