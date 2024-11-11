import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";

import CallIcon from "../CallIcon";

import "./styles.scss";

const CallList = ({ data, handleChange }) => {
  const { call_type, direction, from, to, via, created_at } = data;
  const formattedTime = moment(created_at).format("LT");

  return (
    <div className="call-list" onClick={handleChange}>
      <div className="details">
        <CallIcon callType={call_type} direction={direction} />
        <div className="call-form">
          <div className="title">{direction === "inbound" ? from : to}</div>
          <div className="sub-title">Tried to call on {via}</div>
        </div>
      </div>
      <div className="call-time">
        <BsThreeDotsVertical className="more-icon" />
        <div className="time">{formattedTime.split(" ")[0]}</div>
        <div className="ampm">{formattedTime.split(" ")[1]}</div>
      </div>
    </div>
  );
};

export default CallList;
