import OneTicket from '../tikket/Tikket';
import Panda from '../../assets/panda-cin.png';
import panda from '../../assets/kung.png';
import './Bef_tikket.css'; 

function HistoryTickets() {
  return (
    <div className='history-tickets'>
      <OneTicket title='Кунг Фу Панда 4' img={Panda} buy={true} history={true} />
      <OneTicket title='Кунг Фу Панда 4' img={panda} buy={true} history={true} />
    </div>
  );
}

export default HistoryTickets;
