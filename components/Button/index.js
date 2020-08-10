import ButtonStyles from "./styles";
import Spinner from "../Spinner";

const Button = ({ children, loading, disabled, ...props }) => {
  return (
    <ButtonStyles {...props} disabled={loading ? loading : disabled}>
      {loading ? <Spinner small color="white" /> : children}
    </ButtonStyles>
  );
};

export default Button;
