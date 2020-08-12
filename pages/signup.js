import Head from "next/head";
import Signup from "../components/Signup";

const SignupPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign up now | Cheflicious</title>
        <meta
          name="description"
          content="Join other people now to begin your journey of creating the best recipe ever."
        />
      </Head>
      <Signup />
    </React.Fragment>
  );
};

export default SignupPage;
