import { Close } from "../Icons";
import CloseIconContainer from "./styles";

const CloseIcon = ({ name, ...props }) => {
  return (
    <CloseIconContainer data-name={name} {...props}>
      <Close name={name} />
    </CloseIconContainer>
  );
};

export default CloseIcon;
