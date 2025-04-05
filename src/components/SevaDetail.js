import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function SevaDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { seva, language } = location.state || {};

  if (!seva) {
    return (
      <div className="container my-5">
        <h4>{language === "kn" ? "ಸೇವೆ ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ." : "Seva details not available."}</h4>
      </div>
    );
  }

  const labels = {
    en: {
      heading: "Seva Details",
      name: "Seva Name",
      amount: "Amount",
      description: "Description",
      date: "Date",
      time: "Time",
      duration: "Duration",
      proceed: "Proceed to Payment",
    },
    kn: {
      heading: "ಸೇವೆ ವಿವರಗಳು",
      name: "ಸೇವೆ ಹೆಸರು",
      amount: "ಮೊತ್ತ",
      description: "ವಿವರಣೆ",
      date: "ದಿನಾಂಕ",
      time: "ಸಮಯ",
      duration: "ಅವಧಿ",
      proceed: "ಪಾವತಿಗೆ ಸಾಗಿರಿ",
    },
  };

  const text = labels[language];

  return (
    <div className="container my-5">
      <h2 className="mb-4">{text.heading}</h2>
      <div className="card p-4 shadow-sm">
        <p><strong>{text.name}:</strong> {seva.name}</p>
        <p><strong>{text.amount}:</strong> {seva.amount}</p>
        <p><strong>{text.description}:</strong> {seva.description}</p>
        <p><strong>{text.date}:</strong> {seva.date}</p>
        <p><strong>{text.time}:</strong> {seva.time}</p>
        <p><strong>{text.duration}:</strong> {seva.duration}</p>

        <button
          className="btn btn-success mt-3"
          onClick={() => navigate(`/payment/${id}`, { state: { seva, language } })}
        >
          {text.proceed}
        </button>
      </div>
    </div>
  );
}

export default SevaDetail;
