import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router";

const MainLayout = (prop) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-[97vh]">
      <Header />
      <div className="flex-grow">{prop.children}</div>

      {location.pathname === "/login/sms" ? (
        <div className="text-center">Нажимая на кнопку Регистрация</div>
      ) : location.pathname === "/profile" ? (
        ""
      ) : location.pathname === "/search" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default MainLayout;
