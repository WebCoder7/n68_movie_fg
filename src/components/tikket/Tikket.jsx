import { IoTime } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import './Tikket.css'; 

function OneTicket({ title = "", img = "", buy = false, history = false }) {
  return (
    <div className="ticket-container">
      <div className="ticket-content">
        <div>
          <img width="260px" height="260px" src={img} alt={title} />
        </div>
        <div className="ticket-info">
          <h1 className="ticket-title">{title}</h1>
          <p className="ticket-details">2024 • RU • 6+ • 1ч 34м / 94 минут</p>
          <p className="ticket-cinema">Magic Cinema</p>
          <p className="ticket-hall">Зал №1</p>
          <p className="ticket-date">28 марта, 19:30</p>
          <button
            onClick={buy === false ? () => history === true : null}
            className="ticket-status-btn"
          >
            {buy === false ? (
              <div className="status-paid">
                <TiTick />
                <p>Оплачено</p>
              </div>
            ) : (
              <div className="status-pending">
                <IoTime />
                <p>Ждет оплаты</p>
              </div>
            )}
          </button>
        </div>
      </div>
      {history === false && (
        <div className="ticket-footer">
          <h4>{buy ? "Ваш билет готов" : "Ваш билет бронирован"}</h4>
          <button className="ticket-action-btn">
            {buy ? "Получить билет" : "Оплатить"}
          </button>
        </div>
      )}
    </div>
  );
}

export default OneTicket;
