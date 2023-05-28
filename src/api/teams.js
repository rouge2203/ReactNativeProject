import { API_HOST, API_KEY } from "../utils/constants";
const token = API_KEY;

// Returns ALL clubs from API
export async function getAllTeamsApi() {
  allTeams = [];
  pageCurrent = 1;
  pageTotal = 34;

  while (pageCurrent <= pageTotal) {
    const url = `${API_HOST}/clubs?page=${pageCurrent}`;
    const headers = {
      "X-AUTH-TOKEN": token,
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, { headers });
      const result = await response.json();

      allTeams = [...allTeams, ...result.items];
      pageTotal = result.pagination.pageTotal;
      pageCurrent++;
    } catch (error) {
      console.log("getAllTeamsApi in teams.js (Api) --- ", error);
    }
  }

  allTeams = allTeams.map((team) => {
    return { ...team, image: `${API_HOST}/clubs/${team.id}/image` }; // Add image URL to the array
  });

  return allTeams;
}
