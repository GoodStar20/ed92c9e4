import axios from "axios";
import moment from "moment";

const BaseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = BaseURL;

export const getActivities = async () => {
  const activatedCalls = {};
  const archivedCalls = {};

  try {
    const result = await axios.get(`/activities`);

    if (!result.data?.length) {
      return { activatedCalls, archivedCalls };
    }

    for (let activity of result.data) {
      if (activity?.from && activity?.to) {
        const dateKey = moment(activity.created_at).format("LL");
        if (activity.is_archived) {
          if (archivedCalls[dateKey]) {
            archivedCalls[dateKey].push(activity);
          } else {
            archivedCalls[dateKey] = [activity];
          }
        } else {
          if (activatedCalls[dateKey]) {
            activatedCalls[dateKey].push(activity);
          } else {
            activatedCalls[dateKey] = [activity];
          }
        }
      }
    }
  } catch (error) {
  } finally {
    return { activatedCalls, archivedCalls };
  }
};

export const getCallData = async (id) => {
  try {
    const result = await axios.get(`/activities/${id}`);
    if (result.status === 200) {
      return result.data;
    }
    return {};
  } catch (error) {
    return {};
  }
};

export const patchCallData = async (id, data) => {
  try {
    const result = await axios.patch(`/activities/${id}`, {
      is_archived: data,
    });
    if (result.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const resetCallData = async () => {
  try {
    const result = await axios.patch("/reset");
    if (result.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
