import Vip from "../../assets/vip.svg";
import "./Cinema.css"; 

function Tickets({
  zal = "1",
  time = "11:45",
  vip = true,
  appearance = "2",
  price = "100 000",
}) {
  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <p className="zal-number">Зал № {zal}</p>
        <div className="ticket-info">
          <h6 className="ticket-time">{time}</h6>
          {vip && (
            <div className="vip-info">
              <h6 className="vip-label">VIP</h6>
              <img src={Vip} alt="VIP Icon" />
            </div>
          )}
        </div>
      </div>
      <div className="ticket-footer">
        <h6 className="appearance">{appearance}D</h6>
        <h6 className="price">{price} сум</h6>
      </div>
    </div>
  );
}

export default Tickets;
