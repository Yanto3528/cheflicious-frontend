import { useState } from "react";
import RecipeCard from "../Recipe/RecipeCard";
import { useAuth } from "../../context/AuthContext";
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

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { user: currentUser } = useAuth();

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
            (currentUser._id !== user._id && <button>Follow</button>)}
        </ProfileDetail>
      </ProfileDetailContainer>
      <div>
        <ProfileRecipesHeader>
          <ProfileRecipesNav
            active={activeTab === 0}
            onClick={() => onChangeTab(0)}
          >
            Recipes
          </ProfileRecipesNav>
          <ProfileRecipesNav
            active={activeTab === 1}
            onClick={() => onChangeTab(1)}
          >
            <Star /> Favorites
          </ProfileRecipesNav>
        </ProfileRecipesHeader>
        <Grid>
          {user.recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </Grid>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
