import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Search } from "../Icons";
import { SearchbarContainer } from "./styles";

const Searchbar = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    router.push(`/search/:query`, `/search/${data.search}`);
  };

  return (
    <SearchbarContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Search recipes..."
          name="search"
          ref={register}
        />
        <button>
          <Search />
        </button>
      </form>
    </SearchbarContainer>
  );
};

export default Searchbar;
