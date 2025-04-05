import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SevaDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback if someone lands on this page without proper state
  if (!location.state || !location.state.seva) {
    return (
      <div className="container mt-5 text-center">
        <h4>Invalid Seva Selection</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const { seva, language } = location.state;

  const labels = {
    en: {
      title: "Seva Details",
      name: "Seva Name",
      amount: "Amount",
      description: "Description",
      date: "Date",
      time: "Time",
      duration: "Duration",
      back: "Back",
      proceed: "Proceed to Payment",
    },
    kn: {
      title: "ಸೇವೆ ವಿವರಗಳು",
      name: "ಸೇವೆ ಹೆಸರು",
      amount: "ಮೊತ್ತ",
      description: "ವಿವರಣೆ",
      date: "ದಿನಾಂಕ",
      time: "ಸಮಯ",
      duration: "ಅವಧಿ",
      back: "ಹಿಂದೆ ಹೋಗಿ",
      proceed: "ಪಾವತಿಗೆ ಮುಂದುವರಿಸಿ",
    },
  };

  const t = labels[language];

  return (
    <div className="container my-5">
      <h2 className="mb-4">{t.title}</h2>
      <div className="card shadow-lg p-4">
        <h4 className="mb-3">{seva.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>{t.amount}: </strong> {seva.amount}
          </li>
          <li className="list-group-item">
            <strong>{t.description}: </strong> {seva.description}
          </li>
          <li className="list-group-item">
            <strong>{t.date}: </strong> {seva.date}
          </li>
          <li className="list-group-item">
            <strong>{t.time}: </strong> {seva.time}
          </li>
          <li className="list-group-item">
            <strong>{t.duration}: </strong> {seva.duration}
          </li>
        </ul>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
            {t.back}
          </button>
          <button
            className="btn btn-success"
            onClick={() => navigate(`/payment/${seva.name}`, { state: { seva, language } })}
          >
            {t.proceed}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SevaDetail;
