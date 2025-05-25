import './FooterComponent.css';
import { FooterData } from "./../../data/FooterData"; // استيراد البيانات
import { useTranslation } from "react-i18next"; // لدعم الترجمة

const FooterComponent = () => {
  const { t } = useTranslation(); // استخدام i18next للترجمة

  return (
    <footer>
      <div className="footer-container px-64 mb-64">
        {/* قسم خريطة الموقع */}
        <div className="footer-col">
          <h4 className="title-footer">{t("siteMap.title")}</h4>
          <ul className="ul-site-map">
            {FooterData.siteMap.map((item, index) => (
              <li key={index}>
                <img src={item.icon} alt="icon" />
                <a href={item.link}>
                  <span>{t(item.text)}</span>
                </a>
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
                <a href={item.link}>
                  <span>{t(item.text)}</span>
                </a>
              </li>
            ))}
          </ul>

          <h4 className="title-footer">{t("social.title")}</h4>
          <ul className="ul-socail-link">
            {FooterData.socialLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
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