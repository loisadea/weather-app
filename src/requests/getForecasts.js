import axios from "axios";

export default async function getForecasts() {
  const response = await axios.get(
    "https://cmd-shift-weather-app.onrender.com/forecast"
  );
  if (response.status !== 200) throw Error(response.statusText);
  return response.data;
}
