import "../assets/css/global.css";
import styled from "styled-components";
import ViperStryker from "../assets/svg/viper-stryker.svg";
import ViperLogo from "../assets/images/vkn-logo.png";
import ViperSneakyPete from "../assets/svg/viper-sneaky-pete.svg";
import ViperClubNordic from "../assets/images/viper-club-logo-text.png";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <Logo src={ViperSneakyPete} alt="Sneaky Pete" title="Sneaky Pete" />
        <Logo src={ViperLogo} alt="Fangs" title="Fangs" />
        <Logo src={ViperStryker} alt="Stryker" title="Stryker" />
        <ViperLogoImg src={ViperClubNordic} alt="" width="800px" />
      </div>
    </>
  );
};

const Logo = styled.img`
  width: 200px;
  margin: 20px;
`;

const ViperLogoImg = styled.img`
  border-radius: 8px;
`;

const NewsContainer = styled.div`
  background: black;
  width: 100%;
  min-height: 200px;
  border-radius: 8px;
  color: white;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 376px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Section = styled.section`
  padding: 0 10px;
`;

export default HomePage;
