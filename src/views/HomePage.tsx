import "../assets/css/global.css";
import styled from "styled-components";
import ViperStryker from "../assets/svg/viper-stryker.svg";
import ViperLogo from "../assets/images/vkn-logo.png";
import ViperSneakyPete from "../assets/svg/viper-sneaky-pete.svg";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <Logo src={ViperSneakyPete} alt="Sneaky Pete" title="Sneaky Pete" />
        <Logo src={ViperLogo} alt="Fangs" title="Fangs" />
        <Logo src={ViperStryker} alt="Stryker" title="Stryker" />

        <NewsContainer></NewsContainer>
      </div>
    </>
  );
};

const Logo = styled.img`
  width: 200px;
  margin: 20px;
`;

const NewsContainer = styled.div`
  background: black;
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

export default HomePage;
