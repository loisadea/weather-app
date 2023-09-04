import axios from "axios";

export default async function getForecasts(city) {
  let url = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (city) url += `?city=${city}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response.status === 404) throw Error("City not found");
    throw Error(error.response.statusText);
  }
}
