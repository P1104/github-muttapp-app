import React, { useState } from "react";
import { Link } from "react-router-dom";

function OtherSeva() {
  const [language, setLanguage] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");

  const translations = {
    en: {
      title: "Other Sevas at Sri Raghavendra Swamy Mutt",
      seva: "Seva Name",
      amount: "Amount",
      desc: "Description",
      date: "Date",
      time: "Time",
      duration: "Duration",
      toggle: "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ",
      searchPlaceholder: "Search Sevas...",
      sevas: [
        {
          name: "Gopuja Seva",
          amount: "Rs. 700",
          description: "Sacred cow worship and feeding service.",
          date: "2025-04-15",
          time: "11:30 AM",
          duration: "3 hours",
        },
        {
          name: "Guru Ratha Seva",
          amount: "Rs. 2500",
          description: "Chariot festival service for Sri Raghavendra Swamy.",
          date: "2025-12-15",
          time: "8:30 AM",
          duration: "1 hour",
        },
        {
          name: "Veda Patha Seva",
          amount: "Rs. 1500",
          description: "Sponsoring Vedic chanting.",
          date: "2025-11-12",
          time: "6:30 AM",
          duration: "0.5 hours",
        },
        {
          name: "Annadana Utsava Seva",
          amount: "Rs. 5000",
          description: "Special meal donation during festivals.",
          date: "2025-09-15",
          time: "12:30 PM",
          duration: "4.5 hours",
        },
        {
          name: "Brundavana Deepotsava",
          amount: "Rs. 400",
          description: "Offering lamps in front of Brundavana.",
          date: "2025-04-18",
          time: "8:30 PM",
          duration: "2.5 hours",
        },
        {
          name: "Laksha Bilvarchane",
          amount: "Rs. 3000",
          description: "Offering 1 lakh Bilva leaves to Lord Shiva.",
          date: "2025-04-09",
          time: "6:30 PM",
          duration: "5.5 hours",
        },
        {
          name: "Alankara Seva",
          amount: "Rs. 1000",
          description: "Decoration with flowers, clothes, and ornaments.",
          date: "2025-10-10",
          time: "4:30 AM",
          duration: "6.5 hours",
        },
        {
          name: "Bhajane Seva",
          amount: "Rs. 800",
          description: "Organizing devotional songs in the temple.",
          date: "2025-03-19",
          time: "7:30 PM",
          duration: "9.5 hours",
        },
        {
          name: "Dhanurmasa Pooje",
          amount: "Rs. 600",
          description: "Special pooja during Dhanurmasa.",
          date: "2025-01-11",
          time: "8:30 AM",
          duration: "7.5 hours",
        },
        {
          name: "Sahasranama Archane",
          amount: "Rs. 900",
          description: "Flower offering with 1000 names.",
          date: "2025-12-23",
          time: "10:30 AM",
          duration: "2.5 hours",
        },
      ],
    },
    kn: {
      title: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠದ ಇತರೆ ಸೇವೆ ಬುಕ್ಕಿಂಗ್",
      seva: "ಸೇವೆಯ ಹೆಸರು",
      amount: "ಮೊತ್ತ",
      desc: "ವಿವರಣೆ",
      toggle: "Switch to English",
      searchPlaceholder: "ಸೇವೆಯನ್ನು ಹುಡುಕಿ...",
      sevas: [
        {
          name: "ಗೋಪೂಜೆ ಸೇವೆ",
          amount: "ರೂ. 700",
          description: "ಪವಿತ್ರ ಗೋಪೂಜೆ ಮತ್ತು ಆಹಾರದ ಸೇವೆ.",
          date: "2025-04-15",
          time: "11:30 ಬೆಳಗ್ಗೆ",
          duration: "3 ಗಂಟೆ",
        },
        {
          name: "ಗುರು ರಥ ಸೇವೆ",
          amount: "ರೂ. 2500",
          description: "ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಯ ರಥೋತ್ಸವ ಸೇವೆ.",
          date: "2025-12-15",
          time: "8:30 ಬೆಳಗ್ಗೆ",
          duration: "1 ಗಂಟೆ",
        },
        {
          name: "ವೇದ ಪಾಠ ಸೇವೆ",
          amount: "ರೂ. 1500",
          description: "ವೇದ ಪಾರಾಯಣದ ಪ್ರಾಯೋಜನ.",
          date: "2025-11-12",
          time: "6:30 ಬೆಳಗ್ಗೆ",
          duration: "0.5 ಗಂಟೆ",
        },
        {
          name: "ಅನ್ನದಾನ ಉತ್ಸವ ಸೇವೆ",
          amount: "ರೂ. 5000",
          description: "ಉತ್ಸವ ದಿನಗಳಲ್ಲಿ ವಿಶೇಷ ಅನ್ನದಾನ ಸೇವೆಯ ಪ್ರಾಯೋಜನೆ.",
          date: "2025-09-15",
          time: "12:30 ಮಧ್ಯಾಹ್ನ",
          duration: "4.5 ಗಂಟೆ",
        },
        {
          name: "ಬೃಂದಾವನ ದೀಪೋತ್ಸವ",
          amount: "ರೂ. 400",
          description: "ಬೃಂದಾವನದ ಮುಂದೆ ದೀಪಗಳ ಅರ್ಪಣೆ.",
          date: "2025-04-18",
          time: "8:30 ರಾತ್ರಿ",
          duration: "2.5 ಗಂಟೆ",
        },
        {
          name: "ಲಕ್ಷ ಬಿಲ್ವರ್ಚನೆ",
          amount: "ರೂ. 3000",
          description: "ಶಿವನಿಗೆ 1 ಲಕ್ಷ ಬಿಲ್ವಪತ್ರ ಅರ್ಪಣೆ.",
          date: "2025-04-09",
          time: "6:30 ಸಂಜೆ",
          duration: "5.5 ಗಂಟೆ",
        },
        {
          name: "ಅಲಂಕಾರ ಸೇವೆ",
          amount: "ರೂ. 1000",
          description: "ದೇವರಿಗೆ ಹೂವು, ಉಡುಪು, ಆಭರಣಗಳ ಅಲಂಕಾರ ಸೇವೆ.",
          date: "2025-10-10",
          time: "4:30 ಬೆಳಗ್ಗೆ",
          duration: "6.5 ಗಂಟೆ",
        },
        {
          name: "ಭಜನೆ ಸೇವೆ",
          amount: "ರೂ. 800",
          description: "ದೇವಾಲಯದೊಳಗೆ ಭಕ್ತಿಗೀತೆಗಳ ಸೇವೆಯ ಆಯೋಜನೆ.",
          date: "2025-03-19",
          time: "7:30 ಸಂಜೆ",
          duration: "9.5 ಗಂಟೆ",
        },
        {
          name: "ಧನುರ್ಮಾಸ ಪೂಜೆ",
          amount: "ರೂ. 600",
          description: "ಧನುರ್ಮಾಸದ ಸಮಯದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.",
          date: "2025-01-11",
          time: "8:30 ಬೆಳಗ್ಗೆ",
          duration: "7.5 ಗಂಟೆ",
        },
        {
          name: "ಸಹಸ್ರನಾಮ ಅರ್ಚನೆ",
          amount: "ರೂ. 900",
          description: "1000 ಹೆಸರುಗಳೊಂದಿಗೆ ಹೂವಿನ ಅರ್ಚನೆ.",
          date: "2025-12-23",
          time: "10:30 ಬೆಳಗ್ಗೆ",
          duration: "2.5 ಗಂಟೆ",
        },
      ],
    },
  };

  const selected = translations[language] || translations["en"];
  const { title, toggle, searchPlaceholder, sevas } = selected;

  // Filter the sevas based on the search term
  const filteredSevas = sevas.filter((seva) => {
    const search = searchTerm.toLowerCase();
    return (
      seva.name.toLowerCase().includes(search) ||
      seva.description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
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
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>{selected.seva}</th>
            <th>{selected.amount}</th>
            <th>{selected.desc}</th>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {filteredSevas.length > 0 ? (
            filteredSevas.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link
                    to={`/seva/${index}`} // Link to the Seva details page
                    state={{ seva: item, language }}
                    className="text-decoration-none"
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.amount}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-muted">
                {language === "en"
                  ? "No matching Sevas found."
                  : "ಹೊಂದುವ ಸೇವೆಗಳು ಇಲ್ಲ."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OtherSeva;
