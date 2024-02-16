import "../assets/css/global.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import carImage from "../assets/images/carImages/friends5.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2>Om klubben</h2>
        <ClubInfo>
          <ClubInfoContent>
            <p>
              Viper Club Nordic startade år 2002 av Per Eneland tillsammans med
              Martin Czernik. Klubben har för närvarande mellan 60 - 80 aktiva
              medlemmar som finns i alla nordiska länder, dock kommer de flesta
              från Sverige. Klubben har som mål att växa och bli större så fler
              härliga folk kan träffas och umgås tillsammans med sina vackra
              skapelser.
            </p>
            <p>
              Varje år försöker klubben träffas i alla fall 3 gånger, årsmöte,
              vårmönstring samt höstträff. Vartannat år försöker klubben få till
              banköring som varierar mellan 1-2 dagar vilket även kan ske
              utomlands och åren däremellan träffas man och har trevligt
              tillsammans med bilarna och aktiviteter.
            </p>
            <p>
              Det finns även stödmedlemmar inom klubben som inte själva äger en
              Viper men trots det har flera fördelar inom klubben. Bland annat
              är man välkommen med på årsmötena och vårmönstringen, givetvis för
              samma peng som resterande klubbmedlemmar, man får även tillgång
              till våran medlemssida på facebook där man får tips och råd kring
              bilar (framförallt Viper såklart) och kommer det upp fler event
              under åren är man självklart medbjuden dit och man får även vänner
              och en gemenskap för resten av livet om man så önskar.
            </p>
            <p>
              Är du intresserad av ett medlemskap, antingen som stödmedlem eller
              klubbmedlem med ägande Viper? Kostnaden är 600 kr.
            </p>
            <p>
              Vi finns på facebook -
              <a
                href="https://www.facebook.com/profile.php?id=100068241638933"
                target="_blank"
              >
                klicka här!
              </a>
            </p>
          </ClubInfoContent>
          <div>
            <ImageCar src={carImage} alt="" width="100%" />
          </div>
        </ClubInfo>
      </motion.div>
    </div>
  );
};

const ClubInfo = styled.div`
  margin: 0 16px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
    margin: 0 auto;
  }
`;

const ClubInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-right: 20px; /* Adjust as needed */
`;

const ImageCar = styled.img`
  height: auto;
  border-radius: 8px;
`;

export default AboutPage;
