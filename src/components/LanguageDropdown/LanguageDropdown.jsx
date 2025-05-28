import { useEffect, useState } from "react";
import i18n from "i18next"; 
import './LanguageDropdown.css'
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "ar", name: "Arabic", flag: "/kabbour/Languages/Syrian.png" },
  { code: "en", name: "English", flag: "/kabbour/Languages/British.png" },
];

const LanguageDropdown = ({isMobile}) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Current selected language
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
      } else {
        dropdownRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

 // Function to handle language selection
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change the language using i18next
    setSelectedLanguage(languageCode); // Update the selected language state
    document.body.dir = languageCode === "ar" ? "rtl" : "ltr"; // Update text direction
    localStorage.setItem('appLanguage', languageCode); // حفظ اللغة المحددة
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="language-dropdown">
      {/* Dropdown Trigger */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {/* Display the selected language with its flag */}
        {
          isMobile ? <sapn>{t("language")}</sapn> : <img src="/kabbour/Navbar/language.png" alt="" />
        }
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul ref={dropdownRef} className={`${isMobile ? 'dropdown-menu-mobile' : 'dropdown-menu'}`}>
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <Link onClick={() => handleLanguageChange(lang.code)}>
                <img src={lang.flag}  alt="" />
                {lang.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;