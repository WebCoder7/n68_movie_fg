import logo from "../../assets/logo.svg";
import afisha from "../../assets/afisha.svg";
import activeAfisha from "../../assets/whiteMain.svg";
import seans from "../../assets/Transfer.svg";
import bileti from "../../assets/Monitoring.svg";
import search from "../../assets/search.svg";
import activeSearch from "../../assets/active_search.svg"
import activeSeans from "../../assets/redSeans.svg";
import activeBilet from "../../assets/active_bilet.svg"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.css'; 

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = useSelector((prev) => prev.auth.token);

  return (
    <div className="header-container">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/")}>
          <img src={location.pathname === '/' ? afisha : activeAfisha} alt="Afisha" />
        </button>
        <button onClick={() => navigate("/seans")}>
          <img src={location.pathname === '/seans' ? activeSeans : seans} alt="Seans" />
        </button>
        <button onClick={() => navigate("/bilet")}>
          <img src={location.pathname === '/bilet' ? activeBilet : bileti} alt="Bilet" />
        </button>
        <button onClick={() => navigate("/search")}>
          <img src={location.pathname === '/search' ? activeSearch : search} alt="Search" />
        </button>
      </div>
      <div className="user-actions">
        <select className="language-select">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>

        <Link to={isLogin ? '/profile' : '/login'}>
          <button className="login-button">
            {isLogin ? "профиль" : "Войти"}
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Header;

