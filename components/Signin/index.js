import { mutate } from "swr";
import useAxios from "../../lib/hook/useAxios";
import AuthForm from "../AuthForm";

const formInputs = [
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
    options: { required: true, minLength: 6 },
    errorMsg: "Password must be at least 6 or more characters",
  },
];

const Signin = () => {
  const { loading, API } = useAxios();

  const onSubmit = async (data) => {
    API("POST", "/api/auth/login", data, "/");
    mutate("/api/users/me");
  };

  return (
    <AuthForm
      formInputs={formInputs}
      subtitle="Welcome back, sign in to your account"
      accountText="Don't have an account yet?"
      linkText="Sign up"
      link="/signup"
      submitText="Sign in"
      loading={loading}
      onSubmit={onSubmit}
    />
  );
};

export default Signin;
