import ProfileEditNav from "../ProfileEditNav";
import ProfileEditContainer from "../styles";
import { Form, FormGroup, Input } from "../../../../styles/shared/Form";
import Button from "../../../../styles/shared/Button";

const ProfileEditPassword = () => {
  return (
    <ProfileEditContainer>
      <ProfileEditNav />
      <Form>
        <FormGroup>
          <label htmlFor="oldPassword">Old Password</label>
          <Input
            type="password"
            placeholder="Enter your old password"
            id="oldPassword"
            name="oldPassword"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="newPassword">New Password</label>
          <Input
            type="password"
            placeholder="Enter your new password"
            id="newPassword"
            name="newPassword"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="newPassword2">Confirm New Password</label>
          <Input
            type="password"
            placeholder="Confirm your new password"
            id="newPassword2"
            name="newPassword2"
          />
        </FormGroup>
        <Button>Change Password</Button>
      </Form>
    </ProfileEditContainer>
  );
};

export default ProfileEditPassword;
