import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const NavLink: React.FC = () => {
  return (
    <>
      <LinkContainer>
        <LinkList>
          <LinkItem to="/">Hem</LinkItem>
          <LinkItem to="/event">Event</LinkItem>
          <LinkItem to="/galleri">Galleri</LinkItem>
          <LinkItem to="/kontakt">Kontakt</LinkItem>
          <LinkItem to="/om">Om oss</LinkItem>
        </LinkList>
      </LinkContainer>
    </>
  );
};

const LinkContainer = styled.div`
  font-family: Roboto;
  font-weight: 700;
  color: white;
  width: 100vw;
  padding: 20px;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  width: 800px;
  margin: 0 auto;
  font-size: 20px;

  li {
    padding: 10px;
    width: 110px;
    height: 35px;
    background: white;
    border-radius: 8px;
    float: left;
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
