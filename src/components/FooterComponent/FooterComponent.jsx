import { useContext } from 'react';
import './FooterComponent.css';
import { FooterData } from "./../../data/FooterData"; 
import { useTranslation } from "react-i18next"; 
import { LanguageDirectionContext } from './../../context/LanguageDirectionContext';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  const { direction } = useContext(LanguageDirectionContext);
  const { t } = useTranslation(); 
  
  return (
    <footer>
      <div className="footer-container px-64 mb-64">
        {/* قسم خريطة الموقع */}
        <div className="footer-col">
          <h4 className="title-footer">{t("siteMap.title")}</h4>
          <ul className={`ul-site-map`} style={{ [direction === 'rtl' ? 'right' : 'left']: '0px',  }}>
            {FooterData.siteMap.map((item, index) => (
              <li key={index}>
                <img src={item.icon} alt="icon" style={{transform: direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)',}}/>
                <Link target='_blank' href={item.link} className={`hover-link ${direction == 'rtl'? 'hover-link-right' : 'hover-link-left'}`}>
                  <span>{t(item.text)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* قسم العنوان ومعلومات الاتصال */}
        <div className="footer-col">
          <h4 className="title-footer">{t("address.title")}</h4>
          <ul className="ul-contact-info">
            {FooterData.address.map((item, index) => (
              <li key={index}>
                <img src={item.icon} alt="icon" />
                <a target='_blank' href={item.link} className={`hover-link ${direction == 'rtl'? 'hover-link-right' : 'hover-link-left'}`}>
                  <span>{t(item.text)}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* قسم روابط وسائل التواصل الاجتماعي */}
          <h4 className="title-footer">{t("social.title")}</h4>
          <ul className="ul-socail-link">
            {FooterData.socialLinks.map((item, index) => (
              <li key={index}>
                <a target='_blank' href={item.link}>
                  <img src={item.icon} alt="icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* قسم نموذج الاتصال */}
        <div className="footer-col">
          <h4 className="title-footer">{t("contactUs.title")}</h4>
          <form action="" id="contactUs">
            <div>
              <label htmlFor="subject">{t("contactUs.subject")}</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="email">{t("contactUs.email")}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">{t("contactUs.message")}</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">{t("contactUs.send")}</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;