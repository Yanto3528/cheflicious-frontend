import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import useToggle from "../../lib/hook/useToggle";
import { ChevronDown } from "../Icons";
import {
  MultipleSelectContainer,
  MultipleSelectInput,
  Placeholder,
  IconContainer,
  Dropdown,
  DropdownItem,
} from "./styles";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: "90%",
  },
  visible: {
    opacity: 1,
    y: "100%",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: "90%",
    transition: {
      duration: 0.4,
    },
  },
};

const MultipleSelect = ({ placeholder }) => {
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  const [showDropdown, toggleShowDropdown, setShowDropdown] = useToggle(false);

  const resetPlaceholder = () => setPlaceholderText(placeholder);
  const resetValue = () => setPlaceholderText("");

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <MultipleSelectContainer onClick={() => setShowDropdown(true)}>
        <MultipleSelectInput>
          <Placeholder>{placeholderText}</Placeholder>
        </MultipleSelectInput>
        <IconContainer>
          <ChevronDown />
        </IconContainer>
        <AnimatePresence>
          {showDropdown && (
            <Dropdown
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DropdownItem>
                <p>Breakfast</p>
              </DropdownItem>
              <DropdownItem>
                <p>Lunch</p>
              </DropdownItem>
              <DropdownItem>
                <p>Dinner</p>
              </DropdownItem>
              <DropdownItem>
                <p>Pizza</p>
              </DropdownItem>
              <DropdownItem>
                <p>Noodles</p>
              </DropdownItem>
            </Dropdown>
          )}
        </AnimatePresence>
      </MultipleSelectContainer>
    </OutsideClickHandler>
  );
};

export default MultipleSelect;
