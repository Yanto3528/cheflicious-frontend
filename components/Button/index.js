import ButtonStyles from "./styles";
import Spinner from "../Spinner";

const Button = ({ children, loading, ...props }) => {
  return (
    <ButtonStyles {...props} disabled={loading}>
      {loading ? <Spinner small color="white" /> : children}
    </ButtonStyles>
  );
};

export default Button;
