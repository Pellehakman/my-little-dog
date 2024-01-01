import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Calendar from "../../screens/Calendar/Calendar";

const tabVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navigation = () => {
  const tabs = [
    {
      label: "Dashboard",
      path: "/dashboard",
      component: <Dashboard />,
    },
    {
      label: "Calendar",
      path: "/calendar",
      component: <Calendar />,
    },
  ];

  return (
    <>
      <nav>
        {tabs.map((tab) => (
          <NavLink key={tab.path} to={tab.path}>
            {tab.label}
          </NavLink>
        ))}
      </nav>
      <AnimatePresence exitBeforeEnter={false}>
        <Routes>
          {tabs.map((tab) => (
            <Route
              path={tab.path}
              element={
                <motion.div
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {tab.component}
                </motion.div>
              }
              key={tab.path}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Navigation;
