import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageDirectionContext = createContext();

export const LanguageDirectionProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr');
  const [fontFamily, setFontFamily] = useState('');

  useEffect(() => {
    const updateDirectionAndFont = () => {
      const isArabic = i18n.language === 'ar';
      const dir = isArabic ? 'rtl' : 'ltr';
      const font = isArabic ? '"Noto Kufi Arabic", sans-serif' : '"Roboto", sans-serif';
      setDirection(dir);
      setFontFamily(font);
    };

    updateDirectionAndFont();
    i18n.on('languageChanged', updateDirectionAndFont);

    return () => {
      i18n.off('languageChanged', updateDirectionAndFont);
    };
  }, [i18n]);

  return (
    <LanguageDirectionContext.Provider value={{ direction, fontFamily }}>
      {/* <div dir={direction} style={{ fontFamily }} > */}
        {children}
      {/* </div> */}
    </LanguageDirectionContext.Provider>
  );
};