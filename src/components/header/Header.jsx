import logo from "../../assets/logo.svg";
import afisha from "../../assets/afisha.svg";
import seans from "../../assets/Transfer.svg";
import bileti from "../../assets/Monitoring.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import './Header.css'; 

const Header = () => {
  const Token = localStorage.getItem("Token");

  return (
    <div className="header-container">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="header-buttons">
        <button>
          <img src={afisha} alt="Afisha" />
        </button>
        <button>
          <img src={seans} alt="Seans" />
        </button>
        <button>
          <img src={bileti} alt="Bileti" />
        </button>
        <button>
          <img src={search} alt="Search" />
        </button>
      </div>

      <div className="header-actions">
        <select className="lang-select">
          <option value="ru">Ru</option>
          <option value="uz">U</option>
        </select>
        <Link to={Token ? '/profile' : '/login'}>
          <button className="login-button">
            {Token ? "Профиль" : "Войти"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
