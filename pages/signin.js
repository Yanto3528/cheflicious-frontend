import Head from "next/head";
import Signin from "../components/Signin";

const SigninPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign in now | Cheflicious</title>
        <meta
          name="description"
          content="Sign in now and share your recipe with other people."
        />
      </Head>
      <Signin />
    </React.Fragment>
  );
};

export default SigninPage;
