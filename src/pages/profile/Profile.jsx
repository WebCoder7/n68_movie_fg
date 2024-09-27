import MainLayout from "../../layouts/Main_layout";
import icon from "../../assets/profile.svg";
import logout from "../../assets/logout.svg";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";

import './Profile.css';



function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("Token");
    const Token = localStorage.getItem("Token");

    if (!Token) {
      toast.loading("Akkountdan chiqilmoqda");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const telNumber = localStorage.getItem("telNumber");
  return (
    <MainLayout>
      <ToastContainer />

      <div className="profile-page">
        <div className="user-data">
          <img src={icon} alt="" />
          Мои данные
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="label">Имя пользователя</p>
            <div className="data-field">Abdulaziz Abdujalilov</div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="label">Номер телефона</p>
            <div className="data-field">+998 {telNumber}</div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="label">Адрес электронной почты</p>
            <div className="data-field">abdulaziz@tickets.uz</div>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          <img src={logout} alt="" />
          Выйти из аккаунта
        </button>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
