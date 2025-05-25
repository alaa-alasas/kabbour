import { useState } from "react";
import i18n from "i18next"; // Import i18next for language switching
import './LanguageDropdown.css'

// Define the available languages
const LANGUAGES = [
  { code: "ar", name: "Arabic", flag: "🇸🇾" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Current selected language

  // Function to handle language selection
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change the language using i18next
    setSelectedLanguage(languageCode); // Update the selected language state
    document.body.dir = languageCode === "ar" ? "rtl" : "ltr"; // Update text direction
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
        <ul className="dropdown-menu">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <a href="#" onClick={() => handleLanguageChange(lang.code)}>
                {lang.flag} {lang.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;