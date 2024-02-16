import { motion } from "framer-motion";
import styled from "styled-components";

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1>Kontakta oss</h1>
        <h3>Styrelsen för Viper Club Nordic</h3>
        <SectionDiv>
          <Paragraph>
            <b>Ordförande</b>
            <br />
            Åsa Pettersson
          </Paragraph>
          <Paragraph>
            <b>Vice ordförande</b>
            <br />
            Charlie Strömnes
          </Paragraph>
          <Paragraph>
            <b>Sekreterare</b>
            <br />
            Tim Johansson
          </Paragraph>
          <Paragraph>
            <b>Kassör</b>
            <br />
            Ronnie Pettersson
          </Paragraph>
          <Paragraph>
            <b>Sponsoransvarig</b>
            <br />
            Robert Åkesson
          </Paragraph>
          <Paragraph>
            <b>Eventsamordnare</b>
            <br />
            Ronnie Pettersson & Tim Johansson
          </Paragraph>
        </SectionDiv>
        <div>
          <p>
            <b>Kontaktuppgifter</b>
          </p>
          <p>Telefon: +46 070 123 45 67</p>
          <p>Epost: epost@email.com</p>
        </div>
      </motion.div>
    </div>
  );
};

const SectionDiv = styled.div`
  margin: 0 16px 16px 16px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border-radius: 8px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Paragraph = styled.p`
  align-items: center;
  display: flex; /* Add this to use Flexbox */
  flex-direction: column; /* Align content vertically */
  justify-content: center; /* Center content horizontally */

  @media (min-width: 500px) {
    height: 100px;
  }
`;

export default ContactPage;
