import { IoIosArrowBack } from "react-icons/io";
import OneTicket from "../tikket/Tikket";
import pila from "../../assets/pila.png";
import click from "../../assets/Click.png";
import payme from "../../assets/payme.png";
import './Payment_modal.css'; 

function Payment_modal({ open = false, func }) {
  if (open === false) {
    return <></>;
  } else {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button
            onClick={() => func(false)}
            className="close-button"
          >
            <IoIosArrowBack />
          </button>
          <div className="modal-body">
            <h1 className="modal-title">Оплата</h1>
            <OneTicket title="Кунг Фу Панда 4" img={pila} history={true} />
            <div className="payment-details">
              <h2 className="payment-text">Комиссия сервиса</h2>
              <p className="payment-amount">5 000 сум</p>
            </div>
            <div className="payment-details">
              <h2 className="payment-text">Общая сумма</h2>
              <p className="payment-amount">135 000 сум</p>
            </div>
            <p className="payment-method-title">Выберите способ оплаты</p>
            <div className="payment-options">
              <button className="payment-button">
                <img src={click} alt="" />
              </button>
              <button className="payment-button">
                <img src={payme} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment_modal;
