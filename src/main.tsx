import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { HashRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Navigation from "./common/Navigation/Navigation";
import Tabs from "./common/Navigation/Navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Tabs
        items={[
          {
            name: "Tab #1",
            route: "id1",
            bgColour: "#5B37B7",
            colour: "#DFD7F3",
            render: () => (
              <>
                <p>
                  Depths burying snare value law merciful value snare society
                  eternal-return decieve aversion. Holiest virtues pious war
                  depths noble inexpedient against endless ultimate.
                </p>
                <p>
                  Merciful disgust convictions grandeur abstract battle gains
                  revaluation fearful inexpedient right holiest faithful battle.
                  Merciful depths decrepit intentions virtues salvation war
                  ultimate. Sea transvaluation virtues suicide battle against
                  victorious.
                </p>
                <p>
                  Ocean burying depths evil horror suicide mountains fearful
                  depths christianity disgust gains horror. Self marvelous
                  passion faith against grandeur.
                </p>
              </>
            ),
          },
          {
            name: "Tab #2",
            route: "id2",
            bgColour: "#C9379D",
            colour: "#F7D7EF",
            render: () => (
              <>
                <p>
                  Ideal overcome free burying grandeur aversion. Dead morality
                  self right superiority passion virtues hope society play of
                  snare grandeur. Good oneself burying law good ultimate
                  burying.
                </p>
                <p>
                  Play justice snare holiest noble sea reason marvelous right.
                </p>
                <p>
                  Depths burying snare value law merciful value snare society
                  eternal-return decieve aversion. Holiest virtues pious war
                  depths noble inexpedient against endless ultimate.
                </p>
              </>
            ),
          },
          {
            name: "Tab #3",
            route: "id3",
            bgColour: "#E6A919",
            colour: "#FBEFD3",
            render: () => (
              <>
                <p>
                  Inexpedient gains prejudice aversion pious snare noble ocean
                  ocean overcome self ubermensch prejudice philosophy. Ocean
                  strong sea burying reason ultimate burying spirit. Pious
                  christianity decieve endless abstract decrepit abstract.
                </p>
                <p>
                  Depths burying snare value law merciful value snare society
                  eternal-return decieve aversion. Holiest virtues pious war
                  depths noble inexpedient against endless ultimate.
                </p>
              </>
            ),
          },
          {
            name: "Tab #4",
            route: "id4",
            bgColour: "#1194AA",
            colour: "#D1EBEF",
            render: () => (
              <>
                <p>
                  Depths burying snare value law merciful value snare society
                  eternal-return decieve aversion. Holiest virtues pious war
                  depths noble inexpedient against endless ultimate.
                </p>
                <p>
                  Ocean burying depths evil horror suicide mountains fearful
                  depths christianity disgust gains horror. Self marvelous
                  passion faith against grandeur.
                </p>
              </>
            ),
          },
        ]}
      />
    </HashRouter>
  </React.StrictMode>
);
