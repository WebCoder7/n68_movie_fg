import logo from "../../assets/footer-logo.svg";
import play_market from "../../assets/google-play.svg";
import app_store from "../../assets/app-store.svg";
import list from "../../assets/list.svg";
import rek from "../../assets/reklama.svg";
import faq from "../../assets/FAQ.svg";
import contact from "../../assets/contact.svg";
import insta from "../../assets/instagram.svg";

import './Footer.css';


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <img width="55px" src={logo} alt="Logo" />
        <div className="footer-links">
          <a href="">
            <img src={play_market} alt="Google Play" />
          </a>
          <a href="">
            <img src={app_store} alt="App Store" />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h5>О нас</h5>
        <div className="footer-item">
          <img src={list} alt="List" />
          <p className="footer-text">Публичная оферта</p>
        </div>
        <div className="footer-item">
          <img src={rek} alt="Advertisement" />
          <p className="footer-text highlighted">Реклама</p>
        </div>
        <div className="footer-item">
          <img src={faq} alt="FAQ" />
          <p className="footer-text">F.A.Q</p>
        </div>
        <div className="footer-item">
          <img src={contact} alt="Contact" />
          <p className="footer-text">Контакты</p>
        </div>
      </div>
      <div className="footer-column">
        <h5>Категории</h5>
        <div className="footer-item">
          <img src={list} alt="List" />
          <p className="footer-text">Кино</p>
        </div>
        <div className="footer-item">
          <img src={rek} alt="Theater" />
          <p className="footer-text">Театр</p>
        </div>
        <div className="footer-item">
          <img src={faq} alt="Concerts" />
          <p className="footer-text">Концерты</p>
        </div>
        <div className="footer-item">
          <img src={contact} alt="Sport" />
          <p className="footer-text">Спорт</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="contact-info">
          <h5>Связаться с нами</h5>
          <h5 className="contact-number">+998 (95) 897-33-38</h5>
        </div>
        <div className="social-media">
          <h5>Социальные сети</h5>
          <img width={"24px"} src={insta} className="social-icon" alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
