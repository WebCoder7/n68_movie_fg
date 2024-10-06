import Bilet_card from "../bilet_card/Bilet_card";
import Tickets from "../cinema_app/Cinema";

import "./Bileti.css";

function Bileti() {
  return (
    <div className="bileti-container">
      <div className="months-container">
        <div className="month-section">
          <h5 className="month-title">Март</h5>
          <div className="bilets-wrapper">
            <Bilet_card />
            <Bilet_card date="Пт" number="29" />
            <Bilet_card date="Сб" number="30" />
            <Bilet_card date="Вс" number="31" />
          </div>
        </div>
        <div className="month-section">
          <h5 className="month-title">Апрель</h5>
          <div className="bilets-wrapper">
            <Bilet_card />
            <Bilet_card date="Пн" number="1" />
            <Bilet_card date="Вт" number="2" />
            <Bilet_card date="Ср" number="3" />
            <Bilet_card date="Чт" number="4" />
            <Bilet_card date="Пт" number="5" />
            <Bilet_card date="Сб" number="6" />
            <Bilet_card date="Вс" number="7" />
            <Bilet_card date="Пн" number="8" />
            <Bilet_card date="Вт" number="9" />
            <Bilet_card date="Ср" number="10" />
            <Bilet_card date="Чт" number="11" />
            <Bilet_card date="Пт" number="12" />
          </div>
        </div>
      </div>
      <div>
        <h5 className="section-title">Cinematica</h5>
        <div className="tickets-wrapper">
          <Tickets />
          <Tickets zal="1" time="13:00" vip={true} appearance="2" price="75 000" />
          <Tickets zal="4" time="16:25" vip={false} appearance="3" price="65 000" />
          <Tickets zal="2" time="19:30" vip={false} appearance="2" price="65 000" />
          <Tickets zal="3" time="21:00" vip={false} appearance="2" price="75 000" />
          <Tickets zal="5" time="22:30" vip={true} appearance="2" price="75 000" />
          <Tickets zal="5" time="22:45" vip={false} appearance="2" price="80 000" />
          <Tickets zal="5" time="00:20" vip={true} appearance="2" price="100 000" />
        </div>
        <hr className="divider" />
      </div>
      <div>
        <h5 className="section-title">Magic Cinema</h5>
        <div className="tickets-wrapper">
          <Tickets zal="1" time="11:45" vip={true} appearance="3" price="100 000" />
          <Tickets zal="1" time="13:00" vip={true} appearance="2" price="75 000" />
          <Tickets zal="4" time="16:25" vip={false} appearance="3" price="65 000" />
          <Tickets zal="2" time="19:30" vip={false} appearance="2" price="65 000" />
          <Tickets zal="3" time="21:00" vip={false} appearance="2" price="75 000" />
        </div>
      </div>
    </div>
  );
}

export default Bileti;

