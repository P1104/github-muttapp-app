import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <h2 className="text-center mb-4">
        ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠ, ಹುನಗುಂದ
        <br />
        <small className="text-muted">
          Sri Raghavendra Swamy Mutt, Hungund
        </small>
      </h2>

      {/* Image */}
      <div className="text-center mb-4">
        <img
          src="/wallpaper.png"
          alt="Mutt view"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "450px", objectFit: "cover" }}
        />
      </div>

      {/* Tabs for sections */}
      <Tabs defaultActiveKey="history" id="about-tabs" className="mb-3">
        <Tab eventKey="history" title="History / ಇತಿಹಾಸ">
          <p className="mt-3 text-justify">
            <strong>
              Sri Raghavendra Swamy Mutt, Hungund, holds a deeply rooted
              spiritual heritage that stretches back centuries. The Mutt, a
              sanctum of the Dvaita Vedanta philosophy propagated by Sri
              Madhvacharya, became particularly renowned with the life and works
              of Sri Raghavendra Swamy (1595–1671), one of the most revered
              saints in the Madhwa tradition. His divine presence and miraculous
              deeds earned him a sacred space in the hearts of millions of
              devotees. The foundation of the Hungund Mutt can be traced to the
              saint’s followers and disciples who continued his teachings and
              established centers to carry forward the legacy. Over time,
              Hungund emerged as a significant spiritual center for the
              faithful, especially in North Karnataka. The Mutt's mission has
              always been to propagate dharma, preserve the Vedic tradition, and
              serve as a place of worship, learning, and community upliftment.
              The Mutt witnessed gradual growth through the patronage of kings,
              local landlords, and deeply devout communities. With every passing
              generation, the Mutt adapted to the needs of the devotees,
              offering not just spiritual guidance but also taking on roles in
              education and social welfare. It has played a crucial role in
              organizing religious discourses, yajnas, poojas, and pilgrimages,
              making it a vibrant hub of spiritual activity. In the modern era,
              the Mutt continues to uphold the teachings of Sri Raghavendra
              Swamy while integrating modern practices for better administration
              and outreach. The divine Brindavana (sacred tomb) of Sri
              Raghavendra Swamy at Mantralayam remains the spiritual epicenter,
              but local Mutts like Hungund ensure his teachings and blessings
              reach devotees across regions. The establishment and flourishing
              of the Hungund Mutt reflect the enduring relevance of Sri
              Raghavendra Swamy’s message of devotion (bhakti), righteousness
              (dharma), and service (seva).
            </strong>
            <br />
            <br />
            <strong>
              {" "}
              ಶ್ರೀ ರಾಘವೆಂದ್ರ ಸ್ವಾಮಿ ಮಠ, ಹುನಗುಂದ, ನಿಯಮಾಂತ ಧಾರ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳ
              ಆಧಾರದ ಮೇಲೆ ದೀರ್ಘಮಾಗಿ ಅದ್ಯಾತ್ಮಕ ಇತಿಹಾಸ ಉಳಿಸಿಕೊಂಡಿದೆ. ದ್ವೈತ ವೇದಾಂತ
              ತತ್ವಪದವನ್ನು ಪ್ರಚಾರಿಸಿದ್ ಶ್ರೀ ಮಧ್ವಾಚಾರ್ಯರ ಕಾಲದಿಂದಲೂ ಈ ಮಠವು
              ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಶ್ರೀ ರಾಘವೆಂದ್ರ ಸ್ವಾಮಿ (1595–1671) ಅವರು ದ್ವೈತ
              ಪರಂಪರೆಯ ಅತ್ಯಂತ ಗೌರವಾನ್ವಿತ ಸಂತರಾಗಿದ್ದು, ಅವರ ಜೀವನ ಮತ್ತು ಕೃತಿಗಳು
              ಭಕ್ತರ ಹೃದಯದಲ್ಲಿ ಪವಿತ್ರ ಸ್ಥಳವನ್ನು ಗಳಿಸಿದ್ದಾರೆ. ಹುನಗುಂದದ ಮಠದ
              ಸ್ಥಾಪನೆಯು ಅವರ ಅನುಯಾಯಿಗಳ ಮತ್ತು ಶಿಷ್ಯರ ಮೂಲಕ ನಡೆಯಿತು, ಅವರು ತಮ್ಮ
              ಉಪದೇಶಗಳನ್ನು ಮುಂದುವರಿಸಿದರು ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸಲು
              ಕೇಂದ್ರಗಳನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಹುನಗುಂದವು ಉತ್ತರ ಕರ್ನಾಟಕದಲ್ಲಿ ಭಕ್ತರಿಗಾಗಿ
              ಪ್ರಮುಖ ಆಧ್ಯಾತ್ಮಿಕ ಕೇಂದ್ರವಾಗಿ ಬೆಳೆಯಿತು. ಈ ಮಠವು ಸದಾ ಧರ್ಮವನ್ನು
              ಪ್ರಚಾರಿಸುವುದು, ವೇದೀಯ ಪರಂಪರೆಯನ್ನು ಉಳಿಸುವುದು ಮತ್ತು ಪೂಜಾ ಸ್ಥಳ, ಅಧ್ಯಯನ
              ಮತ್ತು ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿಯ ಸ್ಥಳವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ. ಈ ಮಠವು
              ರಾಜಕುಮಾರರು, ಸ್ಥಳೀಯ ಜಾಗೀರದಾರರು ಮತ್ತು ಭಕ್ತರ ಸಮುದಾಯಗಳ ಬೆಂಬಲದಿಂದ
              ಕ್ರಮೇಣ ಬೆಳೆಯಿತು. ಪ್ರತಿ ತಲೆಮಾರಿಗೆ, ಈ ಮಠವು ಭಕ್ತರ ಅಗತ್ಯಗಳಿಗೆ
              ಹೊಂದಿಕೊಳ್ಳುತ್ತಾ ಬಂದಿದೆ, ಕೇವಲ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ಮಾತ್ರ
              ನೀಡುವುದಲ್ಲದೆ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣದಲ್ಲಿ ಪಾತ್ರವಹಿಸುತ್ತಿದೆ.
              ಇದು ಧಾರ್ಮಿಕ ಚರ್ಚೆಗಳು, ಯಜ್ಞಗಳು, ಪೂಜೆಗಳು ಮತ್ತು ತೀರ್ಥಯಾತ್ರೆಗಳನ್ನು
              ಆಯೋಜಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸಿದೆ, ಇದನ್ನು ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳ
              ಜೀವಂತ ಕೇಂದ್ರವಾಗಿಸುತ್ತದೆ. ಆಧುನಿಕ ಯುಗದಲ್ಲಿ, ಈ ಮಠವು ಶ್ರೀ ರಾಘವೆಂದ್ರ
              ಸ್ವಾಮಿಯ ಉಪದೇಶಗಳನ್ನು ಮುಂದುವರಿಸುತ್ತಿದೆ ಆದರೆ ಉತ್ತಮ ಆಡಳಿತ ಮತ್ತು
              ವ್ಯಾಪ್ತಿಗೆ ಆಧುನಿಕ ಅಭ್ಯಾಸಗಳನ್ನು ಸೇರಿಸುತ್ತಿದೆ. ಶ್ರೀ ರಾಘವೆಂದ್ರ
              ಸ್ವಾಮಿಯ ದಿವ್ಯ ಬ್ರಿಂದಾವನ (ಪವಿತ್ರ ಸಮಾಧಿ) ಮಂತ್ರಾಲಯದಲ್ಲಿ ಆಧ್ಯಾತ್ಮಿಕ
              ಕೇಂದ್ರವಾಗಿದ್ದು, ಸ್ಥಳೀಯ ಮಠಗಳು ಭಕ್ತರಿಗೆ ಅವರ ಉಪದೇಶಗಳು ಮತ್ತು
              ಆಶೀರ್ವಾದಗಳನ್ನು ತಲುಪಿಸುತ್ತವೆ. ಹುನಗುಂದದ ಮಠವು ಶ್ರೀ ರಾಘವೆಂದ್ರ ಸ್ವಾಮಿಯ
              ಸಂದೇಶವನ್ನು ಶ್ರದ್ಧೆ (ಭಕ್ತಿ), ನೀತಿ (ಧರ್ಮ) ಮತ್ತು ಸೇವೆ (ಸೇವಾ) ಎಂದು
              ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ
            </strong>
            .
          </p>
        </Tab>

        <Tab eventKey="sevas" title="Sevas / ಸೇವೆಗಳು">
          <p className="mt-3 text-justify">
            🔷 <strong>Overview:</strong> <br />
            <br />
            Sevas are sacred offerings and services performed to seek blessings.
            They represent devotion, gratitude, and spiritual surrender.
            <br />
            <br />
            🔷 <strong>Types of Sevas:</strong>
            <br />
            <br />
            <strong>Daily Sevas:</strong>
            <br />
            <br />
            Suprabhata Seva – Early morning prayer.
            <br />
            <br />
            Panchamruta Abhisheka – Sacred five-ingredient bath to Rayaru’s
            Brindavana.
            <br />
            <br />
            Alankara Pooja – Decoration and worship.
            <br />
            <br />
            Naivedya – Food offering to the deity.
            <br />
            <br />
            <strong>Monthly Sevas:</strong>
            <br />
            <br />
            Special poojas on Ekadashi, Pournami, Amavasya, and Sankramana.
            <br />
            <br />
            Includes Archana, Homa, and Deepa Seva.
            <br />
            <br />
            <strong> Annual Sevas:</strong>
            <br />
            <br />
            Celebrations like Rayara Aradhane, Madhwa Navami, Dhanurmasa special
            poojas.
            <br />
            <br />
            Include bhajans, pravachanas (discourses), and homas.
            <br />
            <br />
            <strong></strong> Personal Sevas:
            <br />
            <br />
            Performed for individual or family health, prosperity, or wish
            fulfillment.
            <br />
            <br />
            Can include Sankalpa Seva, Archana, Annadana, Vastra Seva, etc.
            <br />
            <br />
            🔷 <strong>Key Highlights</strong>:
            <br />
            <br />
            Panchamruta Abhisheka – Daily sacred bath to Rayaru's Brindavana.
            <br />
            <br />
            Annadana – Free meal service to visiting devotees.
            <br />
            <br />
            Special Poojas – During festivals like Ekadashi, Rayara Aradhane.
            <br />
            <br />
            Pre-booked Sevas – Monthly/annual sevas can be booked in advance.
            <br />
            <br />
            🔷<strong> Benefits of Performing Seva:</strong>
            <br />
            <br />
            Brings peace, health, and prosperity. Increases devotion and removes
            obstacles. Strengthens the devotee's connection with Rayaru the
            divine. It is a path to spiritual growth and blessings.
            <br />
            <br />
            <br />
            <br />
            🔷 <strong>ಪರಿಚಯ:</strong> <br />
            <br />
            ಸೇವೆಗಳು ದೇವರಿಗೆ ಸಮರ್ಪಿತ ಭಕ್ತಿಯ ಆಚರಣೆ. ಇದು ನಂಬಿಕೆ, ಧನ್ಯತೆ ಮತ್ತು
            ಶರಣಾಗತಿಯ ಚಿಹ್ನೆ.
            <br />
            <br />
            🔷 <strong>ಸೇವೆಗಳ ಪ್ರಕಾರ:</strong>
            <br />
            <br />
            <strong>ದೈನಂದಿನ ಸೇವೆಗಳು:</strong>
            <br />
            <br />
            ಸುಪ್ರಭಾತ ಸೇವೆ – ಬೆಳಗಿನ ಪ್ರಾರ್ಥನೆ.
            <br />
            <br />
            ಪಂಚಾಮೃತ ಅಭಿಷೇಕ – ಐದು ಪವಿತ್ರ ಪದಾರ್ಥಗಳಿಂದ ರಾಯರ ಬೃಂದಾವನದ ಅಭಿಷೇಕ.
            <br />
            <br />
            ಅಲಂಕಾರ ಪೂಜೆ – ಶ್ರುಂಗಾರ ಹಾಗೂ ಪೂಜೆ. ನೈವೇದ್ಯ – ದೇವರಿಗೆ ಭೋಜನ ಅರ್ಪಣೆ.
            <br />
            <br />
            <strong>ಮಾಸಿಕ ಸೇವೆಗಳು:</strong>
            <br />
            <br />
            ಏಕಾದಶಿ, ಪೂರ್ಣಿಮಾ, ಅಮಾವಾಸ್ಯೆ, ಮತ್ತು ಸಂಕ್ರಮಣ ದಿನಗಳಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ.
            ಅರ್ಚನೆ, ಹೋಮ, ದೀಪ ಸೇವೆ ಇತ್ಯಾದಿ.
            <br />
            <br />
            <strong>ವಾರ್ಷಿಕ ಸೇವೆಗಳು:</strong> <br />
            <br />
            ರಾಯರ ಆರಾಧನೆ, ಮಧ್ವ ನವಮಿ, ಧನುರ್ಮಾಸ ವಿಶೇಷ ಪೂಜೆಗಳು. ಭಜನೆಗಳು, ಪ್ರವಚನಗಳು
            ಮತ್ತು ಹೋಮಗಳೊಂದಿಗೆ ಆಚರಣೆ.
            <br />
            <br />
            <strong>ವೈಯಕ್ತಿಕ ಸೇವೆಗಳು:</strong>
            <br />
            <br />
            ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯ ಅಥವಾ ಇಚ್ಛಾಪೂರಣಕ್ಕಾಗಿ ವೈಯಕ್ತಿಕ ಸೇವೆಗಳು. ಸಂಕಲ್ಪ ಸೇವೆ,
            ಅರ್ಚನೆ, ಅನ್ನದಾನ, ವಸ್ತ್ರ ಸೇವೆ ಮೊದಲಾದವು.
            <br />
            <br />
            🔷 <strong>ಪ್ರಮುಖ ಅಂಶಗಳು:</strong> <br />
            <br />
            ಪಂಚಾಮೃತ ಅಭಿಷೇಕ – ಪ್ರತಿದಿನ ಬೃಂದಾವನಕ್ಕೆ ಪವಿತ್ರ ಅಭಿಷೇಕ.
            <br />
            <br />
            ಅನ್ನದಾನ – ಭಕ್ತರಿಗೆ ಉಚಿತವಾಗಿ ಊಟದ ವ್ಯವಸ್ಥೆ. <br />
            <br />
            ವಿಶೇಷ ಪೂಜೆಗಳು – ಹಬ್ಬಗಳಲ್ಲಿ, ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ ಆಚರಣೆ. <br />
            <br />
            ಮುಂಗಡ ಬುಕ್ಕಿಂಗ್ ಸೇವೆಗಳು – ಮಾಸಿಕ/ವಾರ್ಷಿಕ ಸೇವೆಗಳ ಬುಕ್ಕಿಂಗ್‌ ಲಭ್ಯ.
            <br />
            <br />
            🔷 <strong>ಸೇವೆಯ ಲಾಭಗಳು:</strong> ಮನಸ್ಸಿಗೆ ಶಾಂತಿ, ದೈಹಿಕ ಹಾಗೂ
            ಆಧ್ಯಾತ್ಮಿಕ ಉನ್ನತಿ. ಭಕ್ತಿಯಲ್ಲಿ ಗಾಢತೆ ಮತ್ತು ಕಷ್ಟ ನಿವಾರಣೆಗೆ ಸಹಾಯ.
            ಶ್ರೀರಾಯರ ಅನುಗ್ರಹವನ್ನು ಪ್ರಾಪ್ತಿಸುವ ಶ್ರೇಷ್ಠ ಮಾರ್ಗ.
            <br />
            <br />
          </p>
          <br />
          <br />
        </Tab>

        <Tab eventKey="facilities" title="Facilities / ಸೌಲಭ್ಯಗಳು">
  <section>
    <ul className="mt-3">
      <li>
        <strong>🏠 Accommodation:</strong>
        <ul>
          <li>Guest rooms and dormitories are available for pilgrims at nominal charges.</li>
          <li>Rooms are maintained with basic amenities such as clean beds, water, and fans.</li>
          <li>Separate accommodations for families and group travelers.</li>
        </ul>
      </li>
      <li>
        <strong>🍛 Annadana Hall:</strong>
        <ul>
          <li>Free meals are served daily to all devotees.</li>
          <li>Meals are prepared with hygiene and offered with devotion.</li>
          <li>Special arrangements are made during festivals and Aradhane for larger gatherings.</li>
        </ul>
      </li>
      <li>
        <strong>🛕 Temple Premises:</strong>
        <ul>
          <li>Spacious temple campus with a peaceful atmosphere.</li>
          <li>Clean surroundings with seating areas and waiting spaces for senior citizens and visitors.</li>
          <li>Well-maintained Brindavana and sanctum for peaceful darshan.</li>
        </ul>
      </li>
      <li>
        <strong>📖 Religious Book Stall:</strong>
        <ul>
          <li>Availability of spiritual literature including Rayaru's miracles, Madhwa philosophy, and devotional bhajans.</li>
          <li>Audio CDs and prasadam items are also available.</li>
        </ul>
      </li>
      <li>
        <strong>🧹 Cleanliness & Security:</strong>
        <ul>
          <li>Daily cleaning of premises ensures a pure environment.</li>
          <li>Security staff are present round-the-clock to assist devotees and maintain order.</li>
        </ul>
      </li>
      <li>
        <strong>💧 Drinking Water & Washrooms:</strong>
        <ul>
          <li>Safe drinking water is available at multiple points within the premises.</li>
          <li>Separate and well-maintained restrooms for men and women.</li>
        </ul>
      </li>
      <li>
        <strong>🚌 Travel Assistance:</strong>
        <ul>
          <li>Local transportation guidance and assistance to nearby towns and temples.</li>
          <li>Auto and taxi arrangements can be made upon request.</li>
        </ul>
      </li>
    </ul>
    <br />
    <br />
    </section>
    <ul className="mt-3">
      <li>
        <strong>🏠 ವಸತಿ ಸೌಲಭ್ಯ:</strong>
        <ul>
          <li>ಭಕ್ತರಿಗೆ ಅಗ್ಗದ ದರದಲ್ಲಿ ಅತಿಥಿ ಗೃಹ ಹಾಗೂ ಡಾರ್ಮಿಟರಿ ಕೊಠಡಿಗಳು ಲಭ್ಯ.</li>
          <li>ಕೊಠಡಿಗಳು ಶುದ್ಧತೆಯಿಂದ ಸಂರಕ್ಷಿತವಾಗಿದ್ದು, ಹಾಸಿಗೆ, ನೀರು ಮತ್ತು ಫ್ಯಾನ್‌ ಸೌಲಭ್ಯಗಳಿವೆ.</li>
          <li>ಕುಟುಂಬ ಮತ್ತು ಗುಂಪು ಯಾತ್ರಿಕರಿಗೆ ಪ್ರತ್ಯೇಕ ವಸತಿ ವ್ಯವಸ್ಥೆ.</li>
        </ul>
      </li>
      <li>
        <strong>🍛 ಅನ್ನದಾನ ಸಭಾಂಗಣ:</strong>
        <ul>
          <li>ಪ್ರತಿದಿನ ಉಚಿತ ಅನ್ನದಾನ ನಡೆಯುತ್ತದೆ.</li>
          <li>ಶುದ್ಧತೆಯಿಂದ ತಯಾರಾದ ಭಕ್ತಿಯ ಭೋಜನ ನೀಡಲಾಗುತ್ತದೆ.</li>
          <li>ಹಬ್ಬಗಳು ಮತ್ತು ಆರಾಧನೆಯ ಸಮಯದಲ್ಲಿ ವಿಶೇಷ ವ್ಯವಸ್ಥೆ.</li>
        </ul>
      </li>
      <li>
        <strong>🛕 ಮಠದ ಆವರಣ:</strong>
        <ul>
          <li>ಶಾಂತಿಯುತ ಮತ್ತು ವಿಶಾಲ ದೇವಾಲಯ ಆವರಣ.</li>
          <li>ಹಿರಿಯ ನಾಗರಿಕರು ಹಾಗೂ ಭಕ್ತರಿಗೆ ಕೂತುಭಾವದಿಂದ ಕಾಯಲು ಸೀಟಿಂಗ್ ಏರಿಯಾ.</li>
          <li>ಶುದ್ಧ ವಾತಾವರಣದಲ್ಲಿ ಬೃಂದಾವನದ ದರ್ಶನ ವ್ಯವಸ್ಥೆ.</li>
        </ul>
      </li>
      <li>
        <strong>📖 ಧಾರ್ಮಿಕ ಪುಸ್ತಕ ಮಾರಾಟ ಮಳಿಗೆ:</strong>
        <ul>
          <li>ಶ್ರೀ ರಾಯರ ಆಶ್ಚರ್ಯಗಳು, ಮಧ್ವ ತತ್ತ್ವ, ಭಜನೆ ಗೀತೆಗಳು ಸೇರಿದಂತೆ ಧಾರ್ಮಿಕ ಸಾಹಿತ್ಯ ಲಭ್ಯ.</li>
          <li>ಆಡಿಯೋ ಸಿಡಿಗಳು ಮತ್ತು ಪ್ರಸಾದ ವಸ್ತುಗಳು ಲಭ್ಯವಿವೆ.</li>
        </ul>
      </li>
      <li>
        <strong>🧹 ಶುದ್ಧತೆ ಮತ್ತು ಭದ್ರತೆ:</strong>
        <ul>
          <li>ಪ್ರತಿದಿನ ಆವರಣ ಶುದ್ಧಗೊಳಿಸಲಾಗುತ್ತದೆ.</li>
          <li>ಭದ್ರತಾ ಸಿಬ್ಬಂದಿ 24x7 ಲಭ್ಯವಿದ್ದು ಭಕ್ತರಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತಾರೆ.</li>
        </ul>
      </li>
      <li>
        <strong>💧 ಪಾನೀಯ ನೀರು ಮತ್ತು ಶೌಚಾಲಯ:</strong>
        <ul>
          <li>ಭದ್ರವಾದ ಕುಡಿಯುವ ನೀರಿನ ವ್ಯವಸ್ಥೆ ಆವರಣದಲ್ಲಿ.</li>
          <li>ಪುರುಷ ಮತ್ತು ಮಹಿಳೆಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ಹಾಗೂ ಶುದ್ಧ ಶೌಚಾಲಯಗಳು.</li>
        </ul>
      </li>
      <li>
        <strong>🚌 ಪ್ರಯಾಣ ಸಹಾಯ:</strong>
        <ul>
          <li>ಹತ್ತಿರದ ನಗರಗಳು ಹಾಗೂ ದೇವಾಲಯಗಳಿಗೆ ಪ್ರಯಾಣದ ಮಾರ್ಗದರ್ಶನ.</li>
          <li>ಆಟೋ, ಟ್ಯಾಕ್ಸಿ ವ್ಯವಸ್ಥೆ ಅಗತ್ಯವಿದ್ದರೆ ಏರ್ಪಡಿಸಲಾಗುತ್ತದೆ.</li>
        </ul>
      </li>
    </ul>
</Tab>
      </Tabs>
    </div>
  );
}

export default About;
