import { API_HOST, API_KEY } from "../utils/constants";
const token = API_KEY;
const url = `${API_HOST}/players?page=`;
const headers = {
  "X-AUTH-TOKEN": token,
  "Content-Type": "application/json",
};

export const getAllPlayersApi = async (teamId) => {
  let allPlayers = [];
  let pageCurrent = 1;
  let pageTotal = 2;
  //console.log("TeamId argument in api: ", teamId);

  while (pageCurrent <= pageTotal) {
    try {
      const response = await fetch(`${url}${pageCurrent}`, { headers });
      const result = await response.json();
      allPlayers = [...allPlayers, ...result.items];
      //pageTotal = result.pagination.pageTotal;
      pageCurrent++;
    } catch (error) {
      console.log("Error in getPLayersApi", error);
    }
  }

  const filteredPlayers = allPlayers.filter((obj) => obj.club === teamId);

  return filteredPlayers;
};
