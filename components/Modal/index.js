import ClientOnlyPortal from "../ClientOnlyPortal";
import CloseIcon from "../CloseIcon";
import Button from "../Button";

import {
  BackgroundOverlay,
  ModalContainer,
  IconContainer,
  ButtonGroup,
} from "./styles";

const Modal = ({ title, subtitle, icon: Icon, toggle, loading, onClick }) => {
  return (
    <ClientOnlyPortal selector="#modal-root">
      <BackgroundOverlay onClick={toggle}>
        <ModalContainer
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div>
            {Icon && (
              <IconContainer>
                <Icon />
              </IconContainer>
            )}
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <ButtonGroup>
            <Button neutral onClick={toggle} disabled={loading}>
              Cancel
            </Button>
            <Button red onClick={onClick} loading={loading}>
              Yes, delete it
            </Button>
          </ButtonGroup>
          <CloseIcon top onClick={toggle} />
        </ModalContainer>
      </BackgroundOverlay>
    </ClientOnlyPortal>
  );
};

export default Modal;
