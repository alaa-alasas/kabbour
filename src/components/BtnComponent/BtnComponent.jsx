import './BtnComponent.css'

const BtnComponent = ({title , handleClick}) => {
  
  return (
    <a className='btn-comp' onClick={handleClick}>{title}</a>
  )
}

export default BtnComponent
