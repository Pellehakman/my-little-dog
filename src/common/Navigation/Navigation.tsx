import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Calendar from "../../screens/Calendar/Calendar";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("/dashboard");
  const controls = useAnimation();

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

  const animateBackground = (path) => {
    const newIndex = tabs.findIndex((tab) => tab.path === path);
    controls.start({
      translateX: newIndex * 150,
    });
  };

  const handleTabClick = (path) => {
    setActiveTab(path);
    animateBackground(path);
  };

  return (
    <>
      {/* Background motion.div */}

      <nav className="flex bg-brand gap-4 p-4 relative z-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.path}
            className="text-white px-4 py-2 rounded z-50"
            onClick={() => handleTabClick(tab.path)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {tab.label}
          </motion.button>
        ))}
        <motion.div
          className="absolute bottom-0 h-full left-0 w-full  bg-blue-700"
          style={{
            width: `${tabs.length * 70}px`,
            translateX:
              tabs.indexOf(tabs.find((tab) => tab.path === activeTab)) * 150,
          }}
          animate={controls}
        ></motion.div>
      </nav>

      {/* Render the active tab component */}
      {tabs.map((tab) =>
        tab.path === activeTab ? (
          <div key={tab.path}>{tab.component}</div>
        ) : null
      )}
    </>
  );
};

export default Navigation;
