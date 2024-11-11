import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { IoIosKeypad } from "react-icons/io";
import { BsRecordCircle } from "react-icons/bs";
import cx from "classnames";

import "./styles.scss";

const BottomBar = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <div className="bottom-bar">
      <FaPhoneAlt
        className={cx("icon", { active: selectedTab === "tab1" })}
        onClick={() => setSelectedTab("tab1")}
      />
      <AiOutlineUser
        className={cx("icon", { active: selectedTab === "tab2" })}
        onClick={() => setSelectedTab("tab2")}
      />
      <div className="dial-pad">
        <IoIosKeypad className="icon-home" />
      </div>
      <AiOutlineSetting
        className={cx("icon", { active: selectedTab === "tab3" })}
        onClick={() => setSelectedTab("tab3")}
      />
      <BsRecordCircle
        className={cx("icon", { active: selectedTab === "tab4" })}
        onClick={() => setSelectedTab("tab4")}
      />
    </div>
  );
};

export default BottomBar;
