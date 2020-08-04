import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AuthForm from "../AuthForm";

const formInputs = [
  {
    type: "text",
    placeholder: "Full name",
    name: "name",
    options: { required: true },
    errorMsg: "Name is required",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
    options: { required: true },
    errorMsg: "Email is required",
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    options: { minLength: 6 },
    errorMsg: "Password must be at least 6 or more character",
  },
];

const Signup = () => {
  const { signup, error } = useContext(AuthContext);
  const onSubmit = (data) => {
    signup(data);
  };
  return (
    <AuthForm
      formInputs={formInputs}
      subtitle=" Sign up now and share your recipe with people around the world."
      accountText="Already have an account?"
      linkText="Sign in"
      link="/signin"
      submitText="Sign up"
      error={error}
      onSubmit={onSubmit}
    />
  );
};

export default Signup;
