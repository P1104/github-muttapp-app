import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MonthlySeva() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Monthly Sevas at Sri Raghavendra Swamy Mutt",
      placeholder: "Search Seva by name or amount...",
      toggle: "Switch to Kannada",
      tableHeaders: [
        "Seva Name",
        "Amount",
        "Description",
        "Date",
        "Time",
        "Duration",
      ],
      sevas: [
        {
          name: "Sankranti Pooja",
          amount: "Rs 500",
          description: "Special pooja performed every month on Sankranti.",
          date: "15th of every month",
          time: "9:00 AM",
          duration: "1 hour",
        },
        {
          name: "Amavasya Homa",
          amount: "Rs 1000",
          description: "Homa performed on every Amavasya.",
          date: "Varies Monthly",
          time: "6:00 AM",
          duration: "1.5 hours",
        },
        {
          name: "Pournami Deeparadhane",
          amount: "Rs 750",
          description: "Lighting ceremony on every full moon.",
          date: "Pournami",
          time: "7:00 PM",
          duration: "45 minutes",
        },
        {
          name: "Navaratri Seva",
          amount: "Rs 2000",
          description: "Special pooja during the Navaratri festival.",
          date: "Navaratri Days",
          time: "Evening",
          duration: "2 hours",
        },
        {
          name: "Maha Shivaratri Seva",
          amount: "Rs 3000",
          description: "Special pooja on Maha Shivaratri.",
          date: "Maha Shivaratri Day",
          time: "Night",
          duration: "All Night",
        },
        {
          name: "Deepavali Seva",
          amount: "Rs 1500",
          description: "Special pooja during Deepavali.",
          date: "Deepavali Day",
          time: "Evening",
          duration: "1 hour",
        },
        {
          name: "Makara Sankranti Seva",
          amount: "Rs 1200",
          description: "Special pooja on Makara Sankranti.",
          date: "Makara Sankranti Day",
          time: "Morning",
          duration: "1 hour",
        },
        {
          name: "Ugadi Seva",
          amount: "Rs 1800",
          description: "Special pooja on Ugadi.",
          date: "Ugadi Day",
          time: "Morning",
          duration: "1 hour",
        },
        {
          name: "Pongal Seva",
          amount: "Rs 1600",
          description: "Special pooja on Pongal.",
          date: "Pongal Day",
          time: "Morning",
          duration: "1 hour",
        },
        {
          name: "Vasant Panchami Seva",
          amount: "Rs 1400",
          description: "Special pooja on Vasant Panchami.",
          date: "Vasant Panchami Day",
          time: "Morning",
          duration: "1 hour",
        },
      ],
    },
    kn: {
      title: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠದ ಮಾಸಿಕ ಸೇವೆಗಳು",
      placeholder: "ಹೆಸರು ಅಥವಾ ಮೊತ್ತದ ಮೂಲಕ ಸೇವೆ ಹುಡುಕಿ...",
      toggle: "ಇಂಗ್ಲಿಷ್‌ಗೆ ಬದಲಾಯಿಸಿ",
      tableHeaders: ["ಸೇವೆ ಹೆಸರು", "ಮೊತ್ತ", "ವಿವರಣೆ", "ದಿನಾಂಕ", "ಸಮಯ", "ಅವಧಿ"],
      sevas: [
        {
          name: "ಸಂಕ್ರಾಂತಿ ಪೂಜೆ",
          amount: "ರೂ  ೫೦೦",
          description: "ಪ್ರತಿ ತಿಂಗಳ ಸಂಕ್ರಾಂತಿಗೆ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ಪ್ರತಿ ತಿಂಗಳ ೧೫ನೇ ತಾರೀಕು",
          time: "ಪೂರ್ವಾಹ್ನ ೯:೦೦",
          duration: "೧ ಗಂಟೆ",
        },
        {
          name: "ಅಮಾವಾಸ್ಯೆ ಹೋಮ",
          amount: "ರೂ ೧೦೦೦",
          description: "ಪ್ರತಿ ಅಮಾವಾಸ್ಯೆಗೆ ಹೋಮ ನಡೆಯುತ್ತದೆ.",
          date: "ತಿಂಗಳಿಗೆ ಭಿನ್ನ",
          time: "ಬೆಳಗ್ಗೆ ೬:೦೦",
          duration: "೧.೫ ಗಂಟೆ",
        },
        {
          name: "ಪೌರ್ಣಮಿ ದೀಪಾರಾಧನೆ",
          amount: "ರೂ  ೭೫೦",
          description: "ಪ್ರತಿ ಪೂರ್ಣಚಂದ್ರದಂದು ದೀಪಾರಾಧನೆ.",
          date: "ಪೌರ್ಣಮಿ",
          time: "ರಾತ್ರಿ ೭:೦೦",
          duration: "೪೫ ನಿಮಿಷಗಳು",
        },
        {
          name: "ನವರಾತ್ರಿ ಸೇವೆ",
          amount: "ರೂ  ೨೦೦೦",
          description: "ನವರಾತ್ರಿ ಹಬ್ಬದ ಸಂದರ್ಭದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ನವರಾತ್ರಿ ದಿನಗಳು",
          time: "ಸಂಜೆ",
          duration: "೨ ಗಂಟೆಗಳು",
        },
        {
          name: "ಮಹಾ ಶಿವರಾತ್ರಿ ಸೇವೆ",
          amount: "ರೂ  ೩೦೦೦",
          description: "ಮಹಾ ಶಿವರಾತ್ರಿ ದಿನ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ಮಹಾ ಶಿವರಾತ್ರಿ ದಿನ",
          time: "ರಾತ್ರಿ",
          duration: "ಎಲ್ಲಾ ರಾತ್ರಿ",
        },
        {
          name: "ದೀಪಾವಳಿ ಸೇವೆ",
          amount: "ರೂ  ೧೫೦೦",
          description: "ದೀಪಾವಳಿ ಹಬ್ಬದ ಸಂದರ್ಭದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ದೀಪಾವಳಿ ದಿನ",
          time: "ಸಂಜೆ",
          duration: "೧ ಗಂಟೆ",
        },
        {
          name: "ಮಕರ ಸಂಕ್ರಾಂತಿ ಸೇವೆ",
          amount: "ರೂ ೧೨೦೦",
          description: "ಮಕರ ಸಂಕ್ರಾಂತಿ ದಿನ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ಮಕರ ಸಂಕ್ರಾಂತಿ ದಿನ",
          time: "ಬೆಳಗ್ಗೆ",
          duration: "೧ ಗಂಟೆ",
        },
        {
          name: "ಉಗಾದಿ ಸೇವೆ",
          amount: "ರೂ  ೧೮೦೦",
          description: "ಉಗಾದಿ ಹಬ್ಬದ ಸಂದರ್ಭದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ಉಗಾದಿ ದಿನ",
          time: "ಬೆಳಗ್ಗೆ",
          duration: "೧ ಗಂಟೆ",
        },
        {
          name: "ಪೋಂಗಲ್ ಸೇವೆ",
          amount: "ರೂ  ೧೬೦೦",
          description: "ಪೋಂಗಲ್ ಹಬ್ಬದ ಸಂದರ್ಭದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ಪೋಂಗಲ್ ದಿನ",
          time: "ಬೆಳಗ್ಗೆ",
          duration: "೧ ಗಂಟೆ",
        },
        {
          name: "ವಸಂತ ಪಂಚಮಿ ಸೇವೆ",
          amount: "ರೂ  ೧೪೦೦",
          description: "ವಸಂತ ಪಂಚಮಿ ಹಬ್ಬದ ಸಂದರ್ಭದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.",
          date: "ವಸಂತ ಪಂಚಮಿ ದಿನ",
          time: "ಬೆಳಗ್ಗೆ",
          duration: "೧ ಗಂಟೆ",
        },
      ],
    },
  };

  // Fallback to 'en' if invalid language key is used
  const selected = translations[language] || translations["en"];

  const { title, placeholder, toggle, tableHeaders, sevas } = selected;

  const filteredSevaList = sevas.filter(
    (seva) =>
      seva.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seva.amount.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSevaClick = (seva, index) => {
    navigate(`/seva/${index}`, { state: { seva, language } });
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{title}</h2>
        <button
          className="btn btn-outline-primary"
          onClick={() => setLanguage(language === "en" ? "kn" : "en")}
        >
          {toggle}
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-bordered table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            {tableHeaders.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredSevaList.length > 0 ? (
            filteredSevaList.map((seva, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => handleSevaClick(seva, index)}
              >
                <td>{seva.name}</td>
                <td>{seva.amount}</td>
                <td>{seva.description}</td>
                <td>{seva.date}</td>
                <td>{seva.time}</td>
                <td>{seva.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                {language === "en" ? "No sevas found." : "ಸೇವೆಗಳು ದೊರಕಲಿಲ್ಲ."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MonthlySeva;
