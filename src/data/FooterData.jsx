import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";

export const FooterData = {
  siteMap: [
    { icon: "/kabbour/Icons/Vector.svg", link: "/", text: "nav.home" },
    { icon: "/kabbour/Icons/Vector.svg", link: "/products", text: "nav.products" },
    { icon: "/kabbour/Icons/Vector.svg", link: "/centers", text: "nav.centers" },
    { icon: "/kabbour/Icons/Vector.svg", link: "/events", text: "nav.media" },
    { icon: "/kabbour/Icons/Vector.svg", link: "/about", text: "nav.about" }
  ],
  address: [
    { icon: <FaLocationDot />, link: "#", text: "address.yabroud" },
    { icon: <FaPhone />, link: "#", text: "+963 11 9493 / 9381" },
    { icon: <MdEmail />, link: "#", text: "info@kabourgroup.com" },
  ],
  socialLinks: [
    { icon: <FaFacebook />, link: "https://www.facebook.com/kabour.international.group/" },
    { icon: <RiInstagramFill />, link: "https://www.instagram.com/campo.syria" },
    { icon: <IoLogoYoutube />, link: "https://www.youtube.com/@emadkco" },
  ],
};