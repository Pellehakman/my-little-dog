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
    <aside id="sidebar" className="w-screen  bg-red-500 p-4">
      <ul className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          <span className="max-sm:hidden">Dashboard</span>
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
          <span className="max-sm:hidden">Calendar</span>
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faCompass} className="mr-2" />
          <span className="max-sm:hidden">Explore</span>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faComments} className="mr-2" />
          <span className="max-sm:hidden">Chat</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "navigation-link active" : "navigation-link"
          }
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          <span className="max-sm:hidden">Profile</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Navigation;
