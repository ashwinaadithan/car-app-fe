import axios from "axios";

const API_URL = "http://localhost:4000";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQ1VTVE9NRVIiLCJfaWQiOiI2MmJmOWZiYmI2ZjEwNWEzNTljZmE2NjIiLCJuYW1lIjoia2hhdmluIiwidXNlcm5hbWUiOiJ0ZXN0IiwicGFzc3dvcmRfaGFzaGVkIjoiJDJiJDEwJGc4LlZIM2cuMnJ0MGxDMkhRcGlPNmVqdkcybFVDM0FNbWNObS5HT0lyYUhuZE4wZkhjU0cyIiwiX192IjowLCJpYXQiOjE2NTcwOTU4OTB9.LPtNZ7C4ZAZVYy_NrDNqbTEkTzEmtfGbw46SrLkwAjc`;

export const getAllTickets = async () => {
  if (!token) return;

  return await axios.get(`${API_URL}/ticket`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const createTicket = async (ticket) => {
  if (!token) return;

  return await axios.post(
    `${API_URL}/ticket`,
    { ...ticket },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const uploadImages = async (ticketId, images) => {
  if (!token) return;

  const content = new FormData();
  for (let image of images) {
    content.append("images", image, image.name);
  }

  return await axios.post(`${API_URL}/ticket/${ticketId}/image`, content, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const getTicketById = async (id) => {
  if (!token) return;

  return await axios.get(`${API_URL}/ticket/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};
