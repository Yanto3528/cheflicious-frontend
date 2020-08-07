import axios from "axios";
import Profile from "../../components/Profile";

const ProfilePage = (props) => {
  return <Profile {...props} />;
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await axios.get(`/api/users/${id}/profile`);
  return { props: { user: res.data, id } };
};

export default ProfilePage;
