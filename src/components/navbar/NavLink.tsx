import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoCarSport } from "react-icons/io5";
import { MdEvent, MdContactMail } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";

const NavLink: React.FC = () => {
  return (
    <>
      <LinkContainer>
        <LinkList>
          <LinkItem to="/">
            <IoCarSport />
            <br />
            Hem
          </LinkItem>
          <LinkItem to="/event">
            <MdEvent />
            <br />
            Event
          </LinkItem>
          <LinkItem to="/galleri">
            <GrGallery />
            <br />
            Galleri
          </LinkItem>
          <LinkItem to="/kontakt">
            <MdContactMail />
            <br />
            Kontakt
          </LinkItem>
          <LinkItem to="/om">
            <FaInfoCircle />
            <br />
            Om oss
          </LinkItem>
        </LinkList>
      </LinkContainer>
    </>
  );
};

const LinkContainer = styled.div`
  font-family: Roboto;
  font-weight: 700;
  color: white;
  padding: 10px 0;
  width: 100%;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  margin: 0 auto;

  @media (min-width: 500px) {
    max-width: 800px;
    font-size: 20px;
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 5px;

  display: inline-block;
  border-radius: 8px;
  margin: 6px;

  transition: ease-in;
  transition-duration: 0.6s;

  &:hover {
    color: #333;
  }

  &:active {
    color: white;
  }

  @media (min-width: 500px) {
    width: 110px;
    padding: 3px;
  }
`;

export default NavLink;
