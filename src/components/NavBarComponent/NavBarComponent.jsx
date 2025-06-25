import { useContext, useEffect, useState } from 'react';
import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import { IoSunny } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeModeContext } from '../../context/ThemeModeContext';
import { RiMoonClearFill } from "react-icons/ri";

const NavBarComponent = ({img,navData}) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu visibility
  const [scrolling, setScrolling] = useState(false); // State to track scroll position for navbar styling
  const { t } = useTranslation();
  const { mode, toggleMode } = useContext(ThemeModeContext);
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
      <div className='brand'>
        <img className='logo' src={img} alt="logo" />
        <span>{t("Logo")}</span>
      </div>

      <ul className={`nav-menu ${isOpen ? "responsiveNav" : ""}`}>
        {
          navData.map((item,index) => (
            <li key={index}>
              <NavLink to={item.link} className={({ isActive }) => (isActive ? "active" : "")} onClick={() =>  setIsOpen(!isOpen)}>
                {t(item.title)}
              </NavLink>
            </li>
          ))
        }
        <li className="mobileLanguageWrapper">
           <LanguageDropdown isMobile={true} closeNav={() =>  setIsOpen(!isOpen)}/>
        </li>
        <li>
          <div class="theme-toggle">
            <span>{t('theme')}</span>
            <div className='btns'>
              <IoSunny className={`mode-icon sun-icon ${mode === 'light' ? '' : 'active'}`} onClick={() => {toggleMode();  setIsOpen(!isOpen);}} />
              <RiMoonClearFill className={`mode-icon moon-icon ${mode === 'light' ? 'active' : ''}`} onClick={toggleMode} />
            </div>
          </div>
        </li>
      </ul>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen 
          ? <AiOutlineClose className='mode-icon' /> // Show close icon when the menu is open
          : <AiOutlineMenu className='mode-icon' /> // Show hamburger icon when the menu is closed
        }
      </button>
      <ul className='nav-icons'>
        <li>
          <NavLink className="" onClick={toggleMode}>
            { mode === 'light' ? <RiMoonClearFill className='mode-icon'/> : <IoSunny className='mode-icon'/> }
          </NavLink>
        </li>
        <li>
           <LanguageDropdown closeNav={() =>  setIsOpen(!isOpen)}/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarComponent
