import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Search } from "../Icons";
import { SearchbarContainer, SearchInput, SearchButton } from "./styles";

const Searchbar = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    router.push(`/search/:query`, `/search/${data.search}`);
  };

  return (
    <SearchbarContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          type="text"
          placeholder="Search recipes..."
          name="search"
          ref={register}
        />
        <SearchButton>
          <Search />
        </SearchButton>
      </form>
    </SearchbarContainer>
  );
};

export default Searchbar;
