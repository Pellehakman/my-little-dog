import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Navigation from "./common/Navigation/Navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <body className="flex flex-col">
        <Navigation />
        <div className="container mx-auto">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </body>
    </Router>
  </React.StrictMode>
);
