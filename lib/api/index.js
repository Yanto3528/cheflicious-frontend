import axios from "axios";

export const handleImageUpload = async (file) => {
  const fileFormData = new FormData();
  fileFormData.append("image", file);
  const res = await axios.post("/api/upload", fileFormData);
  return res.data.Location;
};
