import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useAlertContext } from "../../../../context/AlertContext";

import ProfileEditNav from "../ProfileEditNav";
import ProfileEditContainer from "../styles";
import { Form, FormGroup, Input } from "../../../../styles/shared/Form";
import Button from "../../../../styles/shared/Button";
import ErrorText from "../../../../styles/shared/ErrorText";
import { useAuthContext } from "../../../../context/AuthContext";

const ProfileEditPassword = () => {
  const { currentUser, loading: userLoading } = useAuthContext();
  const router = useRouter();
  const { setAlert } = useAlertContext();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, watch, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.put("/api/users/change-password", data);
      setAlert(res.data.message);
    } catch (error) {
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
      reset();
    }
  };

  useEffect(() => {
    if (!currentUser && !userLoading) {
      router.push("/");
    }
  }, [currentUser, userLoading]);

  if (!currentUser && !userLoading) {
    return null;
  }

  return (
    <ProfileEditContainer>
      <ProfileEditNav />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label htmlFor="oldPassword">Old Password</label>
          <Input
            type="password"
            placeholder="Enter your old password"
            id="oldPassword"
            name="oldPassword"
            error={errors.oldPassword}
            ref={register({ required: true, minLength: 6 })}
          />
          {errors && errors.oldPassword && (
            <ErrorText>
              Old password must be at least 6 or more character
            </ErrorText>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="newPassword">New Password</label>
          <Input
            type="password"
            placeholder="Enter your new password"
            id="newPassword"
            name="newPassword"
            error={errors.newPassword}
            ref={register({ required: true, minLength: 6 })}
          />
          {errors && errors.newPassword && (
            <ErrorText>
              New password must be at least 6 or more character
            </ErrorText>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="newPassword2">Confirm New Password</label>
          <Input
            type="password"
            placeholder="Confirm your new password"
            id="newPassword2"
            name="newPassword2"
            error={errors.newPassword2}
            ref={register({
              validate: (value) => {
                return value === watch("newPassword"); // value is from password2 and watch will return value from password1
              },
            })}
          />
          {errors && errors.newPassword2 && (
            <ErrorText>Password do not match</ErrorText>
          )}
        </FormGroup>
        <Button loading={loading}>Change Password</Button>
      </Form>
    </ProfileEditContainer>
  );
};

export default ProfileEditPassword;
