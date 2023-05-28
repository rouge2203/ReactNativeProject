import { API_HOST, API_KEY } from "../utils/constants";
const token = API_KEY;
const url = `${API_HOST}/players/`;

const headers = {
  "X-AUTH-TOKEN": token,
  "Content-Type": "application/json",
};

export const getPlayerDetailApi = async (playerId) => {
  try {
    const response = await fetch(`${url}${playerId}`, { headers });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error in getPLayerDetailApi ---", error);
    throw error;
  }
};
