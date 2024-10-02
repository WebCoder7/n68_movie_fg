import logo from "../../assets/logo.svg";
import afisha from "../../assets/afisha.svg";
import activeAfisha from "../../assets/whiteMain.svg";
import seans from "../../assets/Transfer.svg";
import bileti from "../../assets/Monitoring.svg";
import search from "../../assets/search.svg";
import activeSeans from "../../assets/redSeans.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  const Token = localStorage.getItem("Token");
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <Link to="/">
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="navigation">
        <button onClick={() => navigate("/")}>
          <img
            src={location.pathname === "/" ? afisha : activeAfisha}
            alt="Afisha"
          />
        </button>
        <button onClick={() => navigate("/seans")}>
          <img
            src={location.pathname === "/seans" ? activeSeans : seans}
            alt="Seans"
          />
        </button>
        <button>
          <img src={bileti} alt="Bileti" />
        </button>
        <button>
          <img src={search} alt="Search" />
        </button>
      </div>
      <div className="header-controls">
        <select className="language-select">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <Link to={Token ? "/profile" : "/login"}>
          <button className="login-button">
            {Token ? "профиль" : "Войти"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
