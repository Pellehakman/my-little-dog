// Navigation.js
import React from "react";
import {
  faStar,
  faCalendar,
  faCompass,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <aside id="sidebar" className="h-screen w-64 bg-red-500 p-4">
      <h1 className="text-white text-xl font-bold mb-4">Navigation</h1>
      <ul className="flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Dashboard
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
          Calendar
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faCompass} className="mr-2" />
          Explore
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faComments} className="mr-2" />
          Chat
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Profile
        </NavLink>
      </ul>
    </aside>
  );
};

export default Navigation;
