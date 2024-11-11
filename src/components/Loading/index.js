import React from "react";
import ReactLoading from "react-loading";

import "./styles.scss";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="spinningBubbles" color="#309614" />
    </div>
  );
};

export default Loading;
