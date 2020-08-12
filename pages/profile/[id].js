import Head from "next/head";
import axios from "axios";
import Profile from "../../components/Profile";

const ProfilePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title> {props.user.name} | Cheflicious</title>
        <meta name="description" content={props.user.bio} />
      </Head>
      <Profile {...props} />
    </React.Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await axios.get(`/api/users/${id}/profile`);
  return { props: { user: res.data } };
};

export default ProfilePage;
