import './FooterComponent.css'

const FooterComponent = () => {

  return (
    <footer>
      <div className='footer-container px-64 mb-64'>   
          <div className='footer-col'>
            <h4 className='title-footer'>Site Map</h4>
            <ul className='ul-site-map'>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>About Yerba mate</span>
              </li>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>About Campo</span>
              </li>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>Yerba mate Products</span>
              </li>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>Campo Products</span>
              </li>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>Video</span>
              </li>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>Audio</span>
              </li>
              <li>
                <img src="/Icons/Vector.svg" alt="icon" />
                <span>Image Gallery</span>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4 className='title-footer'>Address</h4>
            <ul className='ul-contact-info'>
              <li>
                <img src="/Icons/location.svg" alt="icon" />
                <span>Yabroud, Rural Damascus, Syria</span>
              </li>
              <li>
                <img src="/Icons/phone.svg" alt="icon" />
                <span>+963 11 9493 / 9381</span>
              </li>
              <li>
                <img src="/Icons/email.svg" alt="icon" />
                <span>info@kabourgroup.com</span>
              </li>
            </ul>
            <h4 className='title-footer'>Follow Us</h4>
            <ul className='ul-socail-link'>
              <li>
                <img src="/Icons/facebook.svg" alt="icon" />
              </li>
              <li>
                <img src="/Icons/instagram.svg" alt="icon" />
              </li>
              <li>
                <img src="/Icons/youtube.svg" alt="icon" />
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
