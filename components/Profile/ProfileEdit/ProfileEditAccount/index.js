import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../../context/AuthContext";
import { useAlertContext } from "../../../../context/AlertContext";
import useImage from "../../../../lib/hook/useImage";
import ProfileEditNav from "../ProfileEditNav";

import ProfileEditContainer from "../styles";
import { ProfileEditAccountHeader } from "./styles";
import Avatar from "../../../../styles/shared/Avatar";
import {
  Form,
  Input,
  Textarea,
  FormGroup,
} from "../../../../styles/shared/Form";
import Button from "../../../../styles/shared/Button";
import ErrorText from "../../../../styles/shared/ErrorText";

const ProfileEditAccount = () => {
  const { user } = useAuthContext();
  const { setAlert } = useAlertContext();
  const { imagePreview, handleChangeImage, handleImageUpload } = useImage();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    errors,
    reset,
  } = useForm({
    defaultValues: {
      name: user && user.name,
      bio: user && user.bio,
    },
  });

  const onSubmit = async (data) => {
    const avatar = await handleImageUpload();
    const formData = { ...data, avatar };
    try {
      setLoading(true);
      const res = await axios.put("/api/users/update", formData);
      setAlert(res.data.message);
    } catch (error) {
      console.log(error);
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
      reset();
    }
  };

  useEffect(() => {
    if (user && getValues("name") === "") {
      setValue("name", user.name);
      setValue("bio", user.bio);
    }
  }, [user]);

  return (
    user && (
      <ProfileEditContainer>
        <ProfileEditNav />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ProfileEditAccountHeader>
            <Avatar
              src={imagePreview ? imagePreview : user.avatar}
              alt={user.name}
              size="70px"
            />
            <div>
              <p>{user.name}</p>
              <label htmlFor="file">
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleChangeImage}
                />
                <span>Change Profile Photo</span>
              </label>
            </div>
          </ProfileEditAccountHeader>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              error={errors.name}
              ref={register({ required: true })}
            />
            {errors && errors.name && (
              <ErrorText>Name cannot be empty</ErrorText>
            )}
          </FormGroup>
          <FormGroup>
            <label htmlFor="bio">Bio</label>
            <Textarea
              rows="5"
              placeholder="Write a short description about yourself"
              id="bio"
              name="bio"
              ref={register}
            />
          </FormGroup>
          <Button>{loading ? "Submiting..." : "Submit"}</Button>
        </Form>
      </ProfileEditContainer>
    )
  );
};

export default ProfileEditAccount;
