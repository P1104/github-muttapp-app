import React from "react";
import { useLocation, Link } from "react-router-dom";

function Receipt() {
  const { state } = useLocation();
  const { seva, name, phone, language } = state || {};

  const text = {
    en: {
      heading: "Seva Booking Confirmation",
      thankYou: "Thank you for your seva!",
      details: "Booking Details",
      seva: "Seva Name",
      amount: "Amount",
      user: "Your Name",
      phone: "Phone Number",
      date: "Booking Date",
      id: "Booking ID",
      print: "Print Receipt",
      back: "Back to Home",
    },
    kn: {
      heading: "ಸೇವೆ ಬುಕ್ಕಿಂಗ್ ದೃಢೀಕರಣ",
      thankYou: "ನಿಮ್ಮ ಸೇವೆಗೆ ಧನ್ಯವಾದಗಳು!",
      details: "ಬುಕ್ಕಿಂಗ್ ವಿವರಗಳು",
      seva: "ಸೇವೆ ಹೆಸರು",
      amount: "ಮೊತ್ತ",
      user: "ನಿಮ್ಮ ಹೆಸರು",
      phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
      date: "ಬುಕ್ಕಿಂಗ್ ದಿನಾಂಕ",
      id: "ಬುಕ್ಕಿಂಗ್ ಐಡಿ",
      print: "ರಸೀದಿಯನ್ನು ಮುದ್ರಿಸಿ",
      back: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    },
  };

  const t = text[language || "en"];
  const bookingDate = new Date().toLocaleString();
  const bookingID = "SV" + Math.floor(100000 + Math.random() * 900000); // e.g. SV532134

  if (!seva || !name || !phone) {
    return (
      <div className="container my-5">
        <h4>{language === "kn" ? "ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ." : "Details not available."}</h4>
        <Link to="/" className="btn btn-primary mt-3">
          {t.back}
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container my-5">
      <div className="card p-4 shadow">
        <h2 className="text-success mb-3">{t.heading}</h2>
        <p className="lead">{t.thankYou}</p>

        <hr />

        <h5 className="mb-3">{t.details}</h5>
        <ul className="list-group mb-3">
          <li className="list-group-item"><strong>{t.seva}:</strong> {seva.name}</li>
          <li className="list-group-item"><strong>{t.amount}:</strong> {seva.amount}</li>
          <li className="list-group-item"><strong>{t.user}:</strong> {name}</li>
          <li className="list-group-item"><strong>{t.phone}:</strong> {phone}</li>
          <li className="list-group-item"><strong>{t.date}:</strong> {bookingDate}</li>
          <li className="list-group-item"><strong>{t.id}:</strong> {bookingID}</li>
        </ul>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-secondary" onClick={handlePrint}>
            🖨️ {t.print}
          </button>
          <Link to="/" className="btn btn-primary">{t.back}</Link>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
