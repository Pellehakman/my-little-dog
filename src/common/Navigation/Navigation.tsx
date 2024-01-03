import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Calendar from "../../screens/Calendar/Calendar";

const Navigation = () => {
  // let tabs = [
  //   { id: "world", label: "World" },
  //   { id: "ny", label: "N.Y." },
  //   { id: "business", label: "Business" },
  //   { id: "arts", label: "Arts" },
  //   { id: "science", label: "Science" },
  // ];
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
      children: <Calendar />,
    },
    {
      id: 4,
      label: "Chat",
      path: "/chat",
      children: <Calendar />,
    },
    {
      id: 5,
      label: "Profil",
      path: "/profil",
      children: <Calendar />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <nav className="flex bg-brand gap-4 p-4 relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 3 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </nav>
      {tabs.map((tab) =>
        tab.id === activeTab ? <div key={tab.path}>{tab.children}</div> : null
      )}
    </>
  );
};

export default Navigation;
