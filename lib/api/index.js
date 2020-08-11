import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const authAPI = async (ctx) => {
  const token = ctx.req.headers.cookie;
  try {
    if (token) {
      const res = await axios.get("/api/users/me", {
        headers: { cookie: token },
      });
      return res.data;
    }
  } catch (error) {
    return null;
  }
};
