import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../views/AboutPage";
import EventPage from "../../views/EventPage";
import ContactPage from "../../views/ContactPage";
import GalleryPage from "../../views/GalleryPage";
import "../../assets/css/global.css";
import NavLink from "./NavLink";

const HomePage = lazy(() => import("../../views/HomePage"));

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav-container">
        <ul>
          <NavLink />
        </ul>
      </nav>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/galleri" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/om" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default NavBar;
