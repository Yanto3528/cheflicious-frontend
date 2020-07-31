import { useState } from "react";
import RecipeCard from "../Recipe/RecipeCard";
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

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onChangeTab = (index) => setActiveTab(index);

  return (
    <ProfileContainer>
      <ProfileDetailContainer>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"
          alt=""
          size="150px"
          marginRight="20px"
        />
        <ProfileDetail>
          <h1>Chris William</h1>
          <p>I love cooking and sharing it with other people</p>
          <div>
            <span>Followers: 875</span>
            <span>Following: 54</span>
          </div>
          <button>Follow</button>
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
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </Grid>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
