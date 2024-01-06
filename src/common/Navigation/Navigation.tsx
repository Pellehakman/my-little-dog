import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Calendar from "../../screens/Calendar/Calendar";
import Explore from "../../screens/Explore/Explore";
import Chat from "../../screens/Chat/Chat";
import Profile from "../../screens/Profile/Profile";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Navigation = () => {
  const tabs = [
    {
      id: 1,
      label: "Översikt",
      path: "/dashboard",
      children: <Dashboard />,
    },
    {
      id: 2,
      label: "Kalender",
      path: "/calendar",
      children: <Calendar />,
    },
    {
      id: 3,
      label: "Utforska",
      path: "/explore",
      children: <Explore />,
    },
    {
      id: 4,
      label: "Chat",
      path: "/chat",
      children: <Chat />,
    },
    {
      id: 5,
      label: "Profil",
      path: "/profile",
      children: <Profile />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const prevActiveTabRef = useRef<number>(0);
  const [direction, setDirection] = useState(0);

  const handleTabChange = (tabId: number) => {
    const newDirection = tabId > activeTab ? -1 : 1;
    setDirection(newDirection);
    setActiveTab(tabId);
  };

  return (
    <div className="bg-gray-100">
      <nav className="flex bg-brand gap-4 p-4  z-10 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="shit"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 3 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </nav>

      <AnimatePresence custom={direction}>
        <motion.div
          transition={{ duration: 1 }}
          key={activeTab}
          initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
        >
          {tabs.map((tab) =>
            tab.id === activeTab ? (
              <div className="absolute">{tab.children}</div>
            ) : null
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
