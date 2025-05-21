import { useEffect, useState } from 'react';
import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';

const NavBarComponent = ({img,navData}) => {

  const [scrolling, setScrolling] = useState(false); // State to track scroll position for navbar styling

// ===========================
// Handle scroll event to add "scrolled" class to the navbar
// ===========================
useEffect(() => {
  const handleScroll = () => {
    setScrolling(window.scrollY > 50); // Add "scrolled" class if scrolled more than 50px
  };

  window.addEventListener("scroll", handleScroll); // Add scroll event listener
  return () => {
    window.removeEventListener("scroll", handleScroll); // Clean up event listener on unmount
  };
}, []);


  return (
    <nav  className={`navbar px-64 ${scrolling ? "scrolled" : ""}`} >
      <img src={img} alt="logo" />
      <ul className='nav-menu'>
        {
          navData.map((item,index) => (
            <li key={index}>
              <NavLink to={item.link} className={({ isActive }) => (isActive ? "active" : "")}>
                {item.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className="hamburger">
        <img src="/kabbour/Icons/ion_menu.svg" alt="logo" />
      </div>
      <ul className='nav-icons'>
        <li>
          <NavLink className="">
                <img src="/kabbour/Navbar/light-mode.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink  className="">
                <img src="/kabbour/Navbar/language.png" alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarComponent
