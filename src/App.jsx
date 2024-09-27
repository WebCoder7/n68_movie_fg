import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/Auth";
import Home from "./pages/Home";
import SmsPage from "./pages/smsProfile/Sms"
import ProfilePage from "./pages/profile/Profile";

function App() {
  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/sms" element={<SmsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
