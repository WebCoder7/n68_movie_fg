import MainLayout from "../../layouts/Main_layout/index";

import Render_bilets from "../../components/Render_tikket/Render_tikket";
import HistoryTickets from "../../components/bef_Ticket/Bef_tikket";
import Payment_modal from "../../components/modal/Payment_modal";
import './Bilet.css'; 
import { useState } from "react";

function Bileti() {
  const [biletTab, setBiletTab] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <MainLayout>
        <div className="bileti-container">
          <div className="bilet-tabs">
            <button
              onClick={() => setBiletTab(1)}
              className={`bilet-tab ${biletTab === 1 ? "active" : ""}`}
            >
              Активные
            </button>
            <button
              onClick={() => setBiletTab(2)}
              className={`bilet-tab ${biletTab === 2 ? "active" : ""}`}
            >
              История
            </button>
          </div>
          {biletTab === 1 ? <Render_bilets openFunc={setOpen} /> : <HistoryTickets />}
        </div>
      </MainLayout>

      <Payment_modal open={open} func={setOpen} />
    </>
  );
}

export default Bileti;
