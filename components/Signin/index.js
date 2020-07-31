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
    options: { minLength: 6 },
    errorMsg: "Password must be at least 6 or more characters",
  },
];

const Signin = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthForm
      formInputs={formInputs}
      subtitle="Welcome back, sign in to your account"
      accountText="Don't have an account yet?"
      linkText="Sign up"
      link="/signup"
      submitText="Sign in"
      onSubmit={onSubmit}
    />
  );
};

export default Signin;
