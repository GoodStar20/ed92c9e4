import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiArchive } from "react-icons/fi";

import { getActivities, patchCallData, resetCallData } from "../../apis";
import { CallDateTitle, CallList, Loading } from "../../components";

import "./styles.scss";

const Calls = ({ selectedTab }) => {
  const navigate = useNavigate();

  const [activatedCalls, setActivatedCalls] = useState({});
  const [archivedCalls, setArchivedCalls] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    setLoading(true);
    try {
      const result = await getActivities();
      setActivatedCalls(result.activatedCalls);
      setArchivedCalls(result.archivedCalls);
    } finally {
      setLoading(false);
    }
  };

  const archiveAllCalls = async () => {
    setLoading(true);
    const allCalls = Object.values(activatedCalls).flat();

    try {
      await Promise.all(allCalls.map((call) => patchCallData(call.id, true)));
      await fetchActivities();
    } finally {
      setLoading(false);
    }
  };

  const activateAllCalls = async () => {
    setLoading(true);
    try {
      await resetCallData();
      await fetchActivities();
    } finally {
      setLoading(false);
    }
  };

  const handleAllCalls = () => {
    if (selectedTab === "archived") {
      activateAllCalls();
    } else {
      archiveAllCalls();
    }
  };

  const selectedCalls = useMemo(
    () => (selectedTab === "archived" ? archivedCalls : activatedCalls),
    [selectedTab, archivedCalls, activatedCalls],
  );

  useEffect(() => {
    fetchActivities();
  }, []);

  const renderItems = (key, value) => (
    <div key={key}>
      <CallDateTitle title={key} />
      {value.map((list) => (
        <CallList
          key={list.id}
          data={list}
          handleChange={() => navigate(`/calls/${list.id}`)}
        />
      ))}
    </div>
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="archive-all" onClick={handleAllCalls}>
        <FiArchive className="icon" />
        {selectedTab === "archived"
          ? "Activate all calls"
          : "Archive all calls"}
      </div>
      {Object.entries(selectedCalls).map(([key, value]) =>
        renderItems(key, value),
      )}
    </>
  );
};

export default Calls;
