import React from "react";
import HeaderTab from "../HeaderTab";

import "./styles.scss";

const Header = ({ headers, selectedTab, setSelectedTab }) => {
  return (
    <header>
      <img src="/images/logo.png" className="logo" />
      <div className="tabs">
        {headers?.length > 0 &&
          headers.map((header, index) => (
            <HeaderTab
              key={index}
              data={header}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
      </div>
    </header>
  );
};

export default Header;
