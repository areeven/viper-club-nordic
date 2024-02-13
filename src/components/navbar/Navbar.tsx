import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../views/HomePage";
import AboutPage from "../../views/AboutPage";
import EventPage from "../../views/EventPage";
import ContactPage from "../../views/ContactPage";
import GalleryPage from "../../views/GalleryPage";
import "../../assets/css/global.css";
import NavLink from "./NavLink";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav-container">
        <ul>
          <NavLink />
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/galleri" element={<GalleryPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/om" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default NavBar;
