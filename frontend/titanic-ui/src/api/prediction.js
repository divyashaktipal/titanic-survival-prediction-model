import axios from "axios";

const API = axios.create({
  baseURL: "https://titanic-survival-prediction-model-giix.onrender.com",
});

export const predictSurvival = async (data) => {
  const res = await API.post("/predict", data);
  return res.data;
};
