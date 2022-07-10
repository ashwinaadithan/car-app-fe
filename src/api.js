import auth from "./auth";
import axios from "axios";

const API_URL = "http://localhost:4000";

// auth

export const signin = async (username, password) => {
  return await axios.post(
    `${API_URL}/auth/signin`,
    { username, password },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

// tickets

export const getAllTickets = async () => {
  if (!auth.token) return;

  return await axios.get(`${API_URL}/ticket`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const createTicket = async (ticket) => {
  if (!auth.token) return;

  return await axios.post(
    `${API_URL}/ticket`,
    { ...ticket },
    {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const uploadImages = async (ticketId, images) => {
  if (!auth.token) return;

  const content = new FormData();
  for (let image of images) {
    content.append("images", image, image.name);
  }

  return await axios.post(`${API_URL}/ticket/${ticketId}/image`, content, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${auth.token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const getTicketById = async (id) => {
  if (!auth.token) return;

  return await axios.get(`${API_URL}/ticket/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};
