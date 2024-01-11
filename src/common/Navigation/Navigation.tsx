import { useState } from "react";
import { motion } from "framer-motion";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Calendar from "../../screens/Calendar/Calendar";
import Explore from "../../screens/Explore/Explore";
import Chat from "../../screens/Chat/Chat";
import Profile from "../../screens/Profile/Profile";

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

  return (
    <>
      <nav className="flex  bg-brand gap-4 p-4  z-10 ">
        <div className="container mx-auto">
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
                  layoutId="shit"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 3 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <div>
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <div key={tab.id} className="">
              {tab.children}
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default Navigation;
