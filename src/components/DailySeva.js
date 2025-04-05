import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DailySeva() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Daily Sevas at Sri Raghavendra Swamy Mutt",
      placeholder: "Search by Seva Name or Amount...",
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
          name: "Suprabhata Seva",
          amount: "Rs 200",
          description: "Early morning prayer service to awaken the deity.",
          date: "Everyday",
          time: "5:30 AM",
          duration: "30 minutes",
        },
        {
          name: "Panchamruta Abhisheka",
          amount: "Rs 500",
          description:
            "Sacred bath of the Brindavana with five holy ingredients.",
          date: "Everyday",
          time: "6:30 AM",
          duration: "45 minutes",
        },
        {
          name: "Navagraha Homa",
          amount: "Rs 1000",
          description: "Fire ritual for the nine celestial bodies.",
          date: "Every Saturday",
          time: "7:00 AM",
          duration: "1 hour",
        },
        {
          name: "Rudrabhisheka",
          amount: "Rs 800",
          description:
            "Special abhisheka with sacred water and chanting of Rudram.",
          date: "Every Monday",
          time: "6:00 AM",
          duration: "1 hour",
        },
        {
          name: "Vishesh Archana",
          amount: "Rs 300",
          description: "Special archana with unique flowers and items.",
          date: "Everyday",
          time: "8:00 AM",
          duration: "30 minutes",
        },
        {
          name: "Annadanam Seva",
          amount: "Rs 1500",
          description:
            "Free meal service to devotees, offered daily at the Mutt.",
          date: "Everyday",
          time: "12:00 PM",
          duration: "2 hours",
        },
        {
          name: "Deepa Seva",
          amount: "Rs 250",
          description:
            "Lighting lamps inside the sanctum during poojas and rituals.",
          date: "Everyday",
          time: "6:00 PM",
          duration: "1 hour",
        },
        {
          name: "Chandanotsava Seva",
          amount: "Rs 600",
          description:
            "Sandalwood decoration ritual for the deity or Brindavana.",
          date: "Every Friday",
          time: "5:00 PM",
          duration: "1 hour",
        },
        {
          name: "Flower Seva",
          amount: "Rs 400",
          description:
            "Offering garlands and floral decoration for the deity during rituals.",
          date: "Everyday",
          time: "7:00 AM",
          duration: "30 minutes",
        },
        {
          name: "Archana & Homa Sevas",
          amount: "Rs 1200",
          description: "Personal archana or homa with your name and gotra.",
          date: "Everyday",
          time: "8:30 AM",
          duration: "1 hour",
        },
      ],
    },
    kn: {
      title: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠದ ನಿತ್ಯ ಸೇವೆಗಳು",
      placeholder: "ಸೇವೆ ಹೆಸರು ಅಥವಾ ಮೊತ್ತದಿಂದ ಹುಡುಕಿ...",
      toggle: "ಇಂಗ್ಲಿಷ್‌ಗೆ ಬದಲಾಯಿಸಿ",
      tableHeaders: ["ಸೇವೆ ಹೆಸರು", "ಮೊತ್ತ", "ವಿವರಣೆ", "ದಿನಾಂಕ", "ಸಮಯ", "ಅವಧಿ"],
      sevas: [
        {
          name: "ಸುಪ್ರಭಾತ ಸೇವೆ",
          amount: "ರೂ. 200",
          description: "ದೇವರನ್ನು ಎಬ್ಬಿಸುವ ಪ್ರಾತಃಕಾಲಿನ ಪ್ರಾರ್ಥನಾ ಸೇವೆ.",
          date: "ಪ್ರತಿದಿನ",
          time: "5:30 ಬೆಳಗ್ಗೆ",
          duration: "30 ನಿಮಿಷಗಳು",
        },
        {
          name: "ಪಂಚಾಮೃತ ಅಭಿಷೇಕ",
          amount: "ರೂ. 500",
          description: "ಐದು ಪವಿತ್ರ ಪದಾರ್ಥಗಳಿಂದ ಬೃಂದಾವನಕ್ಕೆ ಅಭಿಷೇಕ.",
          date: "ಪ್ರತಿದಿನ",
          time: "6:30 ಬೆಳಗ್ಗೆ",
          duration: "45 ನಿಮಿಷಗಳು",
        },
        {
          name: "ನವಗ್ರಹ ಹೋಮ",
          amount: "ರೂ. 1000",
          description: "ನವೆಡೆಗಳಿಗಾಗಿ ಅಗ್ನಿ ಹೋಮ.",
          date: "ಪ್ರತಿ ಶನಿವಾರ",
          time: "7:00 ಬೆಳಗ್ಗೆ",
          duration: "1 ಗಂಟೆ",
        },
        {
          name: "ರುದ್ರಾಭಿಷೇಕ",
          amount: "ರೂ. 800",
          description: "ಪವಿತ್ರ ನೀರಿನಿಂದ ಮತ್ತು ರುದ್ರಂ ಪಠಣದಿಂದ ವಿಶೇಷ ಅಭಿಷೇಕ.",
          date: "ಪ್ರತಿ ಸೋಮವಾರ",
          time: "6:00 ಬೆಳಗ್ಗೆ",
          duration: "1 ಗಂಟೆ",
        },
        {
          name: "ವಿಶೇಷ ಅರ್ಚನೆ",
          amount: "ರೂ. 300",
          description: "ವಿಶಿಷ್ಟ ಹೂವುಗಳು ಮತ್ತು ವಸ್ತುಗಳಿಂದ ವಿಶೇಷ ಅರ್ಚನೆ.",
          date: "ಪ್ರತಿದಿನ",
          time: "8:00 ಬೆಳಗ್ಗೆ",
          duration: "30 ನಿಮಿಷಗಳು",
        },
        {
          name: "ಅನ್ನದಾನ ಸೇವೆ",
          amount: "ರೂ. 1500",
          description:
            "ಭಕ್ತರಿಗೆ ಉಚಿತ ಭೋಜನ ಸೇವೆ, ಪ್ರತಿದಿನ ಮಠದಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.",
          date: "ಪ್ರತಿದಿನ",
          time: "12:00 ಮಧ್ಯಾಹ್ನ",
          duration: "2 ಗಂಟೆಗಳು",
        },
        {
          name: "ದೀಪ ಸೇವೆ",
          amount: "ರೂ. 250",
          description: "ಪೂಜೆಯ ಸಮಯದಲ್ಲಿ ದೇವಾಲಯದಲ್ಲಿ ದೀಪಗಳನ್ನು ಬೆಳಗಿಸುವುದು.",
          date: "ಪ್ರತಿದಿನ",
          time: "6:00 ಸಂಜೆ",
          duration: "1 ಗಂಟೆ",
        },
        {
          name: "ಚಂದನೋತ್ಸವ ಸೇವೆ",
          amount: "ರೂ. 600",
          description: "ದೇವರಿಗೆ ಅಥವಾ ಬೃಂದಾವನಕ್ಕೆ ಚಂದನ ಅಲಂಕಾರ ಸೇವೆ.",
          date: "ಪ್ರತಿ ಶುಕ್ರವಾರ",
          time: "5:00 ಸಂಜೆ",
          duration: "1 ಗಂಟೆ",
        },
        {
          name: "ಹೂ ಸೇವೆ",
          amount: "ರೂ. 400",
          description: "ಪೂಜೆಯ ಸಮಯದಲ್ಲಿ ದೇವರಿಗೆ ಹೂಗಾಲು ಮತ್ತು ಹೂ ಅಲಂಕಾರ.",
          date: "ಪ್ರತಿದಿನ",
          time: "7:00 ಬೆಳಗ್ಗೆ",
          duration: "30 ನಿಮಿಷಗಳು",
        },
        {
          name: "ಅರ್ಚನೆ ಮತ್ತು ಹೋಮ ಸೇವೆಗಳು",
          amount: "ರೂ. 1200",
          description:
            "ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಗೋತ್ರದೊಂದಿಗೆ ವೈಯಕ್ತಿಕ ಅರ್ಚನೆ ಅಥವಾ ಹೋಮ.",
          date: "ಪ್ರತಿದಿನ",
          time: "8:30 ಬೆಳಗ್ಗೆ",
          duration: "1 ಗಂಟೆ",
        },
      ],
    },
  };

  const { title, placeholder, toggle, tableHeaders, sevas } =
    translations[language];

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

export default DailySeva;
