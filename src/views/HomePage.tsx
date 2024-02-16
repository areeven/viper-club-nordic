import "../assets/css/global.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import ViperStryker from "../assets/svg/viper-stryker.svg";
import ViperLogo from "../assets/images/vkn-logo.png";
import ViperSneakyPete from "../assets/svg/viper-sneaky-pete.svg";
import ViperClubNordic from "../assets/images/viper-club-logo-text.png";

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Logo src={ViperSneakyPete} alt="Sneaky Pete" title="Sneaky Pete" />
        <Logo src={ViperLogo} alt="Fangs" title="Fangs" />
        <Logo src={ViperStryker} alt="Stryker" title="Stryker" />
        <ViperLogoImg src={ViperClubNordic} alt="" width="800px" />
      </motion.div>
    </div>
  );
};

const Logo = styled.img`
  width: 30%;

  @media (min-width: 500px) {
    width: 200px;
    margin: 20px;
  }
`;

const ViperLogoImg = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export default HomePage;
