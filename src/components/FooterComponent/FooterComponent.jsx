import { useContext, useState } from 'react';
import './FooterComponent.css';
import { FooterData } from "./../../data/FooterData"; 
import { useTranslation } from "react-i18next"; 
import { LanguageDirectionContext } from './../../context/LanguageDirectionContext';
import { Link } from 'react-router-dom';
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";

const FooterComponent = () => {
  const { direction } = useContext(LanguageDirectionContext);
  const { t } = useTranslation(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mjkrrrek',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
        alert('sent sucessfully!!!!!');

      } else {
        setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقًا.');
      }
    } catch (err) {
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقًا.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer>
      <div className="Responsive footer-container px-64 mb-64">
        {/* قسم خريطة الموقع */}
        <div className="footer-col">
          <h4 className="title-footer">{t("siteMap.title")}</h4>
          <ul className={`ul-site-map`} style={{ [direction === 'rtl' ? 'right' : 'left']: '0px',  }}>
            {FooterData.siteMap.map((item, index) => (
              <li key={index}>
                {
                  direction != 'rtl'? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />
                }
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
                {item.icon}
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
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* قسم نموذج الاتصال */}
        <div className="footer-col" id='contact-form'>
          <h4 className="title-footer">{t("contactUs.title")}</h4>
          <form onSubmit={handleSubmit} id="contactUs">
            <div>
              <label htmlFor="subject">{t("contactUs.subject")}</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="email">{t("contactUs.email")}</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="message">{t("contactUs.message")}</label>
              <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>
            </div>
             {error && <p className="error-message">{error}</p>}
            <button type="submit" disabled={isLoading}> {isLoading ? 'جارٍ الإرسال...' : t("contactUs.send")}</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;