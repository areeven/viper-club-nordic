import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const NavLink: React.FC = () => {
  return (
    <>
      <LinkContainer>
        <h1>Viper Club Nordic</h1>
        <LinkItem to="/">Hem</LinkItem>
        <LinkItem to="/event">Event</LinkItem>
        <LinkItem to="/galleri">Galleri</LinkItem>
        <LinkItem to="/kontakt">Kontakt</LinkItem>
        <LinkItem to="/om">Om oss</LinkItem>
      </LinkContainer>
    </>
  );
};

const LinkContainer = styled.div`
  font-family: Roboto;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 0;
  background: black;
  color: white;
  width: 100vw;
  padding: 20px;
`;

const LinkItem = styled(RouterLink)`
  margin: 10px;
  text-decoration: none;

  &:hover {
    color: white;
  }

  &.active {
    color: white;
  }
`;

const LinkItemClicked = styled(RouterLink)`
  text-decoration: none;
  color: white;
`;

export default NavLink;
