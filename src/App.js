import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Calls from "./pages/Calls";
import Detail from "./pages/Detail";

import { Header, BottomBar } from "./components";

const headers = [
  { key: "activated", name: "Activity" },
  { key: "archived", name: "Archived" },
];

const App = () => {
  const [selectedTab, setSelectedTab] = useState("activated");

  return (
    <div className="container">
      <Header
        headers={headers}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="container-view">
        <Routes>
          <Route path="/" element={<Calls selectedTab={selectedTab} />} />
          <Route path="calls">
            <Route index element={<Calls />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
