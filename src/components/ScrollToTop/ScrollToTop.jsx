import { useContext, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { LanguageDirectionContext } from './../../context/LanguageDirectionContext';
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { direction } = useContext(LanguageDirectionContext);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.onscroll = handleScroll;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "Scroll-show" : ""} ${direction == 'rtl' ? 'scroll-to-top-right' : 'scroll-to-top-left'}`}
    >
      <IoMdArrowUp className="ScrollArrow" />
    </button>
  );
}
