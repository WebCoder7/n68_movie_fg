import  { useState } from "react";
import { useNavigate } from "react-router";
import MainLayout from "../../layouts/Main_layout";
import OtpInput from "react-otp-input";

import './SmsProfile.css';


function SmsPage() {
  const [smsValue, setSmsValue] = useState("");

  const Token = localStorage.getItem("Token");
  const number = localStorage.getItem("telNumber");
  const navigate = useNavigate();

  
  const handleLogin = () => {
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "john@mail.com",
        password: "changeme",
      }),
    })

      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((json) => {
        localStorage.setItem("Token", json.access_token);
        navigate('/');
      });
  };

  return Token ? (
    <MainLayout>
      <div className="sms-page">

        <h1 className="header">Введите СМС-код</h1>
        <p className="description">
          Введите СМС-код, который мы отправили на номер{" "}
          <span className="highlight">{number}</span>
        </p>

        <OtpInput
          value={smsValue}
          onChange={(value) => {
            setSmsValue(value);
            if (value.length === 4) {
              handleLogin();
            }
          }}
          numInputs={4}
          renderSeparator={<span>&nbsp;&nbsp;</span>}
          inputStyle={{
            width: "70px",
            paddingTop: "20px",
            paddingBottom: "20px",
            fontSize: "18px",
            borderRadius: "8px",
            background: "#111111",
            margin: "5px",
            textAlign: "center",
            outline: "none",
          }}
          renderInput={(props) => <input {...props} />}
        />

        <p className="resend-code">
          Отправить код еще раз – <span className="highlight">0:52</span>
        </p>

      </div>

    </MainLayout>

  ) : (
    navigate("/")
  );

}







export default SmsPage;
