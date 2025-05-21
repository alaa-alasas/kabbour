import { useNavigate } from 'react-router-dom';
import './BtnComponent.css'

const BtnComponent = ({title , action}) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle button click and navigate to the specified route
  const handleClick = () => {
    navigate(action); // Navigate to the route specified in the `to` prop
  };
  return (
    <a className='btn-comp' onClick={handleClick}>{title}</a>
  )
}

export default BtnComponent
