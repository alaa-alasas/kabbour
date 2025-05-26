import { useState } from "react";
import i18n from "i18next"; 
import './LanguageDropdown.css'

const LANGUAGES = [
  { code: "ar", name: "Arabic", flag: "/kabbour/Languages/Syrian.png" },
  { code: "en", name: "English", flag: "/kabbour/Languages/British.png" },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Current selected language

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
        <img src="/kabbour/Navbar/language.png" alt="" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className={`dropdown-menu`}>
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <a href="#" onClick={() => handleLanguageChange(lang.code)}>
                <img src={lang.flag}  alt="" />
                {lang.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;