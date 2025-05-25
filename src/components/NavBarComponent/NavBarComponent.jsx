import { useEffect, useState } from 'react';
import './NavBarComponent.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';

const NavBarComponent = ({img,navData}) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu visibility
  const [scrolling, setScrolling] = useState(false); // State to track scroll position for navbar styling
  const { t } = useTranslation();

  //const { t, i18n } = useTranslation();
  
  //const [language, setLanguage] = useState("en");

  // const toggleLanguage = () => {
  //   const newLang = language === "en" ? "ar" : "en";
  //   setLanguage(newLang);
  //   i18n.changeLanguage(newLang); // Change the language in i18next
  //   document.body.dir = newLang === "ar" ? "rtl" : "ltr"; // Update text direction
  // };
  
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
      <img className='logo' src={img} alt="logo" />

      <ul className={`nav-menu ${isOpen ? "responsiveNav" : ""}`}>
        {
          navData.map((item,index) => (
            <li key={index}>
              <NavLink to={item.link} className={({ isActive }) => (isActive ? "active" : "")}>
                {t(item.title)}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={
            isOpen
              ? "/kabbour/Icons/close.svg" // Show close icon when the menu is open
              : "/kabbour/Icons/ion_menu.svg" // Show hamburger icon when the menu is closed
          }
          alt="menu toggle"
        />
      </button>
      <ul className='nav-icons'>
        <li>
          <NavLink className="">
                <img src="/kabbour/Navbar/light-mode.png" alt="" />
          </NavLink>
        </li>
        <li>
           <LanguageDropdown />
          {/* <button onClick={toggleLanguage}>
            {language === "en" ? "Arabic" : "English"}
          </button> */}
          {/* <NavLink  className="">
                <img src="/kabbour/Navbar/language.png" alt="" />
          </NavLink> */}
        </li>
        {/* <li></li> */}
      </ul>
    </nav>
  )
}

export default NavBarComponent
