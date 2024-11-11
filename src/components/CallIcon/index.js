import React from "react";
import {
  BsFillTelephoneXFill,
  BsVoicemail,
  BsFillTelephoneInboundFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

import "./styles.scss";

const CallIcon = ({ callType, direction }) => {
  const iconConfig = {
    answered:
      direction === "inbound" ? (
        <BsFillTelephoneInboundFill className="inbound-call" />
      ) : (
        <BsFillTelephoneOutboundFill className="outbound-call" />
      ),
    missed: <BsFillTelephoneXFill className="missed-call" />,
    voicemail: <BsVoicemail className="voicemail-call" />,
  };

  return iconConfig[callType] || null;
};

export default CallIcon;
