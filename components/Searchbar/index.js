import IosSearch from "react-ionicons/lib/IosSearch";
import { SearchbarContainer } from "./styles";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <form>
        <input type="text" placeholder="Recipe, ingredients..." />
        <span>
          <IosSearch />
        </span>
      </form>
    </SearchbarContainer>
  );
};

export default Searchbar;
