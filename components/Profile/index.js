import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RecipeCard from "../Recipe/RecipeCard";
import Spinner from "../Spinner";
import { useAuthContext } from "../../context/AuthContext";
import useInfiniteScroll from "../../lib/hook/useInfiniteScroll";
import { Star } from "../Icons";
import {
  ProfileContainer,
  ProfileDetailContainer,
  ProfileDetail,
  ProfileRecipesHeader,
  ProfileRecipesNav,
} from "./styles";
import Avatar from "../../styles/shared/Avatar";
import Grid from "../../styles/shared/Grid";
import { LoadingMoreContainer } from "../../styles/shared/LoadingIcon";

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView();
  const {
    user: currentUser,
    followUser,
    unFollowUser,
    loading: userLoading,
  } = useAuthContext();
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, hasMore } = useInfiniteScroll(
    [],
    `/api/recipes?author=${user._id}`,
    pageNumber
  );

  useEffect(() => {
    setPageNumber(1);
  }, [user._id]);

  useEffect(() => {
    if (inView && hasMore) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  }, [ref, inView, hasMore]);

  const handleFollowAndUnfollow = () => {
    if (currentUser.following.includes(user._id)) {
      unFollowUser(user._id);
    } else {
      followUser(user._id);
    }
  };

  const onChangeTab = (index) => setActiveTab(index);

  return (
    <ProfileContainer>
      <ProfileDetailContainer>
        <Avatar
          src={user.avatar}
          alt={user.name}
          size="150px"
          marginRight="20px"
        />
        <ProfileDetail>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <div>
            <span>Followers: {user.followers.length}</span>
            <span>Following: {user.following.length}</span>
          </div>
          {!currentUser ||
            (currentUser._id !== user._id && (
              <button disabled={userLoading} onClick={handleFollowAndUnfollow}>
                {currentUser.following.includes(user._id)
                  ? "Unfollow"
                  : "Follow"}
              </button>
            ))}
        </ProfileDetail>
      </ProfileDetailContainer>
      <div>
        <ProfileRecipesHeader>
          <ProfileRecipesNav
            active={activeTab === 0}
            onClick={() => onChangeTab(0)}
          >
            Recipes ({user.recipes.length})
          </ProfileRecipesNav>
          <ProfileRecipesNav
            active={activeTab === 1}
            onClick={() => onChangeTab(1)}
          >
            <Star /> Favorites
          </ProfileRecipesNav>
        </ProfileRecipesHeader>
        <Grid>
          {data.map((recipe, index) => {
            if (data.length === index + 1) {
              return <RecipeCard key={recipe._id} recipe={recipe} ref={ref} />;
            }
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </Grid>
        <LoadingMoreContainer>
          {loading && <Spinner />}
          {error && <h3>Something went wrong when fetching data</h3>}
        </LoadingMoreContainer>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
