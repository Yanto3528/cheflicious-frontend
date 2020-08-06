import { useState } from "react";
import axios from "axios";

const useImage = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChangeImage = (e) => {
    if (e.target.files && e.target.files.length !== 0) {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveImagePreview = (e) => {
    setImagePreview(null);
    setFile(null);
  };

  const handleImageUpload = async () => {
    const fileFormData = new FormData();
    fileFormData.append("image", file);
    const res = await axios.post("/api/upload", fileFormData);
    return res.data.Location;
  };

  return {
    file,
    imagePreview,
    handleChangeImage,
    handleRemoveImagePreview,
    handleImageUpload,
  };
};

export default useImage;
