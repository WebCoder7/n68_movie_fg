import imd from "../../assets/imd.svg";
import kinopoisk from "../../assets/kinopoisk.svg";
import Cinema_data from "../../components/cinemaData/Cinema_data";
import { BsTicketPerforatedFill } from "react-icons/bs";
import "./About_film.css"; 

function About_film({ set = () => {} }) {
  return (
    <div className="about-film-container">
      <div className="ratings-section">
        <button className="rating-button">
          6.6 <img src={imd} alt="" />
        </button>
        <button className="rating-button">
          6.8 <img src={kinopoisk} alt="" />
        </button>
      </div>

      <div>
        <Cinema_data />
        <hr className="divider" />
        <Cinema_data title="В ролях" />
        <hr className="divider" />

        <div className="plot-section">
          <h5 className="plot-title">Сюжет</h5>
          <p className="plot-description">
            Продолжение приключений легендарного Воина Дракона, его верных
            друзей и наставника (часть вторая)
          </p>
          <button onClick={() => set(1)} className="buy-ticket-button">
            <BsTicketPerforatedFill />
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
}

export default About_film;
