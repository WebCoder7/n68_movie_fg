import Bilet_card from "../../components/ticked_card/Bilet_card";
import Tickets from "../cinema_app/Cinema";



import "./Bileti.css";

function Bileti() {
    return (
        <div className="bileti-container">
            <div className="month-section">
                <div className="month-column">
                    <h5 className="month-title">Март</h5>
                    <div className="cards-row">
                        <Bilet_card />
                        <Bilet_card date="Пт" number="29" />
                        <Bilet_card date="Сб" number="30" />
                        <Bilet_card date="Вс" number="31" />
                    </div>
                </div>



                <div className="month-column">
                    <h5 className="month-title">Апрель</h5>
                    <div className="cards-row">
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

            <div className="cinematica-section">
                <h5 className="cinematica-title">Cinematica</h5>
                <div className="tickets-row">
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

            <div className="magic-cinema-section">
                <h5 className="magic-cinema-title">Magic Cinema</h5>
                <div className="tickets-row">
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
