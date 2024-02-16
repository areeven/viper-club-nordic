import "../assets/css/global.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import Ormgrillning from "../assets/images/carImages/friends2.jpg";
import Kinnekulle from "../assets/images/carImages/kinnekulle.jpg";

const EventPage: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <EventContainer>
          <Article>
            <h2>Kommande event</h2>
            <ul>
              <li>Ormgrillning - 2024</li>
              <li>VM24 - Åland</li>
              <li>Höstträff - Orsa 2024</li>
            </ul>

            <h2>Tidigare event</h2>
            <ul>
              <li>VM23 - Kinnekulle ring</li>
              <EventImage src={Kinnekulle} alt="" width="100%" />
              <li>Ormgrillning - 2023</li>
              <EventImage src={Ormgrillning} alt="" width="100%" />
              <li>Dala Sportbilsfestival</li>
              <li>Höstkörning 1</li>
              <li>Race your snake Mora/Orsa - 2023</li>
              <li>Årsmöte 2024</li>
            </ul>
          </Article>
        </EventContainer>
      </motion.div>
    </div>
  );
};

const EventContainer = styled.div`
  margin: 0 16px 16px 16px;
  min-height: 200px;
  border-radius: 8px;
  padding: 20px;

  @media (min-width: 500px) {
    margin: 0 auto;
  }
`;

const Article = styled.article`
  max-width: 300px;
  margin: 0 auto;
  text-align: left;
`;

const EventImage = styled.img`
  margin: 4px;
  border-radius: 8px;
`;

export default EventPage;
