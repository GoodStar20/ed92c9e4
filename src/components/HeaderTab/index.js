import React from "react";
import cx from "classnames";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./styles.scss";

const HeaderTab = ({ data, selectedTab, setSelectedTab }) => {
  const isActive = data.key === selectedTab;

  return (
    <div className="header-tab">
      <button
        className={cx("tab-btn", { active: isActive })}
        onClick={() => setSelectedTab(data.key)}
        aria-pressed={isActive}
      >
        {data.name}
      </button>
      <BsThreeDotsVertical className="more-icon" />
    </div>
  );
};

export default HeaderTab;
