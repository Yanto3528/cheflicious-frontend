import { useAlert } from "../../context/AlertContext";
import { AnimatePresence } from "framer-motion";
import ClientOnlyPortal from "../ClientOnlyPortal";
import { CheckMark, Close } from "../Icons";
import {
  AlertContainer,
  AlertOuterContainer,
  AlertInnerContainer,
  AlertIconContainer,
} from "./styles";
import { slideInVariants } from "../../utils/variants";

const Alert = () => {
  const { alerts } = useAlert();
  return (
    <ClientOnlyPortal selector="#modal-root">
      <AlertContainer>
        <AnimatePresence>
          {alerts.length > 0 &&
            alerts.map((alert) => (
              <AlertOuterContainer
                key={alert.id}
                variants={slideInVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AlertInnerContainer type={alert.type}>
                  <AlertIconContainer type={alert.type}>
                    {alert.type === "danger" ? <Close /> : <CheckMark />}
                  </AlertIconContainer>
                  <p>{alert.message}</p>
                </AlertInnerContainer>
              </AlertOuterContainer>
            ))}
        </AnimatePresence>
      </AlertContainer>
    </ClientOnlyPortal>
  );
};

export default Alert;
