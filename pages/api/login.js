import axios from "axios";
import cookie from "cookie";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
    default:
      return res.json({ message: `${req.method} method not allowed` });
  }
};

const handlePostRequest = async (req, res) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/auth/login`,
      req.body
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", response.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        // sameSite: "strict",
        maxAge: 3600 * 24 * 7,
        path: "/",
        // domain: "http://localhost:3000",
      })
    );
    res.json({ token: response.data.token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong when logging in" });
  }
};
