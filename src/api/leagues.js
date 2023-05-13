import { API_HOST, API_KEY } from "../utils/constants";
const token = API_KEY;

export async function getLeaguesApi(endpointURL) {
  const url = `${API_HOST}/leagues?page=1`;
  const headers = {
    "X-AUTH-TOKEN": token,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(endpointURL || url, { headers });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error en league api ----", error);
  }
}

// //Otra forma con axios
// export async function getLeaguesApi() {
//   const url = `${API_HOST}/leagues?page=3`;
//   const token = "5a23bda2-fa22-4b67-8624-b9a09b08a798";
//   const headers = {
//     "X-AUTH-TOKEN": token,
//     "Content-Type": "application/json",
//   };
//   const response = await axios.get(url, { headers });
//   return response.data;
// }
