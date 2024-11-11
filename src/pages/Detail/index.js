import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import moment from "moment";

import { getCallData, patchCallData } from "../../apis";
import { CallIcon, Loading } from "../../components";

import "./styles.scss";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [callData, setCallData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCallData = async () => {
    setLoading(true);
    try {
      const result = await getCallData(id);
      setCallData(result);
    } catch (error) {
      console.error("Error fetching call data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeData = async () => {
    setLoading(true);
    try {
      await patchCallData(id, !callData.is_archived);
      navigate("/");
    } catch (error) {
      console.error("Error updating call data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!callData) {
    return <div>Error loading call details.</div>;
  }

  const { direction, from, to, call_type, via, create_at, is_archived } =
    callData;

  return (
    <div className="call-details">
      <FiChevronLeft className="back" onClick={() => navigate("/")} />
      <div className="title">Details</div>
      <div className="row">
        <div className="col-1">From Number:</div>
        <div className="col-2">{direction === "inbound" ? from : to}</div>
      </div>
      <div className="row">
        <div className="col-1">To Number:</div>
        <div className="col-2">{direction === "inbound" ? to : from}</div>
      </div>
      <div className="row">
        <div className="col-1">Call Type:</div>
        <div className="col-2">
          <CallIcon callType={call_type} direction={direction} />
        </div>
      </div>
      <div className="row">
        <div className="col-1">Via:</div>
        <div className="col-2">{via}</div>
      </div>
      <div className="row">
        <div className="col-1">Call Date:</div>
        <div className="col-2">{moment(create_at).format("lll")}</div>
      </div>
      <button className="activeBtn" onClick={handleChangeData}>
        {is_archived ? "Activate" : "Archive"}
      </button>
    </div>
  );
};

export default Detail;
