import axios from "axios";

const API_URL =
  "https://soccer-football-info.p.rapidapi.com/matches/view/basic/";
const API_KEY = "857db26ce4mshf789849dc8a91d4p1561a1jsndd8aea3dc2d1";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "soccer-football-info.p.rapidapi.com",
  },
});

export const fetchEvents = async () => {
  try {
    const response = await axiosInstance.get("", {
      params: { i: "1", l: "en_US" },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
};

export const fetchEvent = async (eventId) => {
  try {
    const response = await axiosInstance.get(`/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch event:", error);
    throw new Error("Failed to fetch event");
  }
};

export const addEvent = async (eventData) => {
  try {
    const response = await axiosInstance.post("", eventData);
    return response.data;
  } catch (error) {
    console.error("Failed to add event:", error);
    throw new Error("Failed to add event");
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const response = await axiosInstance.put(`/${eventId}`, eventData);
    return response.data;
  } catch (error) {
    console.error("Failed to update event:", error);
    throw new Error("Failed to update event");
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await axiosInstance.delete(`/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete event:", error);
    throw new Error("Failed to delete event");
  }
};
