import logo from "../../assets/footer-logo.svg";
import play_market from "../../assets/google-play.svg";
import app_store from "../../assets/app-store.svg";
import list from "../../assets/list.svg";
import rek from "../../assets/reklama.svg";
import faq from "../../assets/FAQ.svg";
import contact from "../../assets/contact.svg";
import insta from "../../assets/instagram.svg";
import "./Footer.css"; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-section">
        <img width="55px" src={logo} alt="Footer Logo" />
        <div className="app-links">
          <a href="#">
            <img src={play_market} alt="Google Play" />
          </a>
          <a href="#">
            <img src={app_store} alt="App Store" />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h5>О нас</h5>
        <div className="footer-item">
          <img src={list} alt="Public Offer" />
          <p className="text-light">Публичная оферта</p>
        </div>
        <div className="footer-item">
          <img src={rek} alt="Reklama" />
          <p className="text-highlight">Реклама</p>
        </div>
        <div className="footer-item">
          <img src={faq} alt="FAQ" />
          <p className="text-light">F.A.Q</p>
        </div>
        <div className="footer-item">
          <img src={contact} alt="Contacts" />
          <p className="text-light">Контакты</p>
        </div>
      </div>

      <div className="footer-section">
        <h5>Категории</h5>
        <div className="footer-item">
          <img src={list} alt="Cinema" />
          <p className="text-light">Кино</p>
        </div>
        <div className="footer-item">
          <img src={rek} alt="Theatre" />
          <p className="text-light">Театр</p>
        </div>
        <div className="footer-item">
          <img src={faq} alt="Concerts" />
          <p className="text-light">Концерты</p>
        </div>
        <div className="footer-item">
          <img src={contact} alt="Sports" />
          <p className="text-light">Спорт</p>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-contact">
          <h5>Связаться с нами</h5>
          <h5 className="contact-number">+998 (95) 897-33-38</h5>
        </div>
        <div className="footer-social">
          <h5>Социальные сети</h5>
          <div className="social-icons">
            <img width="24px" src={insta} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
