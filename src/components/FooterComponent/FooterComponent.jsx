import './FooterComponent.css'

const FooterComponent = () => {

  return (
    <footer>
      <div className='footer-container px-64 mb-64'>   
          <div className='footer-col'>
            <h4 className='title-footer'>Site Map</h4>
            <ul className='ul-site-map'>
              <li>
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>About Yerba mate</span>
                </a>
              </li>
              <li>                  
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>About Campo</span>
                </a>
              </li>
              <li>
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>Yerba mate Products</span>
                </a>
              </li>
              <li>                  
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>Campo Products</span>
                </a>
              </li>
              <li>
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>Video</span>
                </a>
              </li>
              <li>
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>Audio</span>
                </a>
              </li>
              <li>
                <img src="/kabbour/Icons/Vector.svg" alt="icon" />
                <a href="#">
                  <span>Image Gallery</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4 className='title-footer'>Address</h4>
            <ul className='ul-contact-info'>
              <li>
                <img src="/kabbour/Icons/location.svg" alt="icon" />
                <a href="#">
                  <span>Yabroud, Rural Damascus, Syria</span>
                </a>
              </li>
              <li>
                <img src="/kabbour/Icons/phone.svg" alt="icon" />
                <a href="#">
                  <span>+963 11 9493 / 9381</span>
                </a>
              </li>
              <li>
                <img src="/kabbour/Icons/email.svg" alt="icon" />
                <a href="#">
                  <span>info@kabourgroup.com</span>
                </a>
              </li>
            </ul>
            <h4 className='title-footer'>Follow Us</h4>
            <ul className='ul-socail-link'>
              <li>
                <a href="#">
                  <img src="/kabbour/Icons/facebook.svg" alt="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/kabbour/Icons/instagram.svg" alt="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/kabbour/Icons/youtube.svg" alt="icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4 className='title-footer'>Contact Us</h4>
            <form action="" id='contactUs'>
              <div>
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required/>
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required/>
              </div>
              <div>
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required>
                </textarea>
              </div>             
              <button type="submit">Send</button>
            </form>
          </div>
      </div>
    </footer>
  );
}

export default FooterComponent
