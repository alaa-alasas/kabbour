import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

const NavBarComponent = ({img,navData}) => {
  return (
    <nav className='navbar px-64'>
      <img src={img} alt="logo" />
      <ul className='nav-menu'>
        {
          navData.map((item,index) => (
            <li key={index}>
              <NavLink to={item.link} className="">
                {item.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className="hamburger">
        <img src="/Icons/ion_menu.svg" alt="logo" />
      </div>
      <ul className='nav-icons'>
        <li>
          <NavLink className="">
                <img src="/Navbar/light-mode.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink  className="">
                <img src="/Navbar/language.png" alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarComponent
