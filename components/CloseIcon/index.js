import { Close } from "../Icons";
import CloseIconContainer from "./styles";

const CloseIcon = ({ ...props }) => {
  return (
    <CloseIconContainer {...props}>
      <Close />
    </CloseIconContainer>
  );
};

export default CloseIcon;
