import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { seva, language } = state || {};
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const text = {
    en: {
      heading: "Complete Your Payment",
      name: "Your Name",
      phone: "Phone Number",
      note: "Scan the QR or use UPI ID below to make the payment.",
      upi: "UPI ID: mutt@upi",
      confirm: "I have completed the payment",
    },
    kn: {
      heading: "ನಿಮ್ಮ ಪಾವತಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ",
      name: "ನಿಮ್ಮ ಹೆಸರು",
      phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
      note: "ಕೆಳಗಿನ ಕ್ಯೂಆರ್‌ ಕೋಡ್ ಅನ್ನು ಸ್ಕಾನ್ ಮಾಡಿ ಅಥವಾ ಯುಪಿಐ ಐಡಿಯನ್ನು ಬಳಸಿ ಪಾವತಿ ಮಾಡಿ.",
      upi: "ಯುಪಿಐ ಐಡಿ: mutt@upi",
      confirm: "ನಾನು ಪಾವತಿ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೇನೆ",
    },
  };

  const t = text[language || "en"];

  if (!seva) {
    return (
      <div className="container my-5">
        <h4>{language === "kn" ? "ಸೇವೆ ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ." : "Seva details not available."}</h4>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">{t.heading}</h2>

      <div className="card p-4 shadow-sm">
        <h5>{seva.name} - {seva.amount}</h5>
        <p>{seva.description}</p>
        <p className="text-muted">{t.note}</p>

        {/* QR Image (Placeholder) */}
        <div className="text-center mb-3">
          <img
            src="https://via.placeholder.com/200x200.png?text=QR+Code"
            alt="QR Code"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
          <p className="mt-2">{t.upi}</p>
        </div>

        {/* Name & Phone Inputs */}
        <div className="mb-3">
          <label className="form-label">{t.name}</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">{t.phone}</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success"
          onClick={() =>
            navigate("/receipt", {
              state: {
                seva,
                name,
                phone,
                language,
              },
            })
          }
          disabled={!name || !phone}
        >
          {t.confirm}
        </button>
      </div>
    </div>
  );
}

export default Payment;
