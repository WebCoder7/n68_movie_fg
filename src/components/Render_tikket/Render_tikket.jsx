import OneTicket from "../tikket/Tikket";
import Panda from "../../assets/panda-cin.png";
import panda from "../../assets/kung.png";
import pila from "../../assets/pila.png";
import './Render_tikket.css'; 


function Render_bilets({ openFunc }) {
  return (
    <div className='tickets-container'>
      <OneTicket open={openFunc} title='Кунг Фу Панда 4' img={Panda} buy={true} history={false} />
      <OneTicket open={openFunc} title='Кунг Фу Панда 4' img={panda} buy={true} history={false} />
      <OneTicket open={openFunc} title='Пила / Джокер новый....' img={pila} buy={false} history={false} />
    </div>
  );
}

export default Render_bilets;

