import { Search } from "../Icons";
import { SearchbarContainer } from "./styles";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <form>
        <input type="text" placeholder="Recipe, ingredients..." />
        <span>
          <Search />
        </span>
      </form>
    </SearchbarContainer>
  );
};

export default Searchbar;
