import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { Close } from "../Icons";
import useToggle from "../../lib/hook/useToggle";
import { ChevronDown } from "../Icons";
import {
  SelectContainer,
  SelectInput,
  SelectItem,
  SelectItemCloseIcon,
  Placeholder,
  IconContainer,
  Dropdown,
  DropdownItem,
} from "./styles";
import ErrorText from "../../styles/shared/ErrorText";
import {
  dropdownVariants,
  categoriesVariants,
  placeholderVariants,
  plaholderStartVariants,
} from "../../utils/variants";

let variants;

const Select = ({
  isMulti,
  placeholder,
  options,
  values,
  name,
  onSelect,
  onAdd,
  onRemove,
  errors,
}) => {
  const [showDropdown, toggleShowDropdown, setShowDropdown] = useToggle(false);

  useEffect(() => {
    variants = plaholderStartVariants;
  }, []);

  const onSelectMultipleItem = (option) => {
    onAdd(option);
  };

  const onSelectItem = (option) => {
    onSelect(option.value);
    setShowDropdown(false);
  };

  const onRemoveSelectedItem = (option) => {
    onRemove(option);
    if (values.length === 1) {
      if (variants !== placeholderVariants) {
        variants = placeholderVariants;
      }
    }
  };

  const selectedOption = isMulti ? (
    <AnimatePresence>
      {values.map((value) => (
        <SelectItem
          key={value._id}
          variants={categoriesVariants}
          animate="visible"
          exit="exit"
        >
          <div>
            <p>{value.value}</p>
            <SelectItemCloseIcon onClick={() => onRemoveSelectedItem(value)}>
              <Close />
            </SelectItemCloseIcon>
          </div>
        </SelectItem>
      ))}
    </AnimatePresence>
  ) : (
    <Placeholder>{values}</Placeholder>
  );

  const errorMessages = () => {
    if (errors && errors[name]) {
      if (isMulti) {
        return <ErrorText>*Please choose at least 1 {name}</ErrorText>;
      } else {
        return <ErrorText>*Please choose 1 {name}</ErrorText>;
      }
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <SelectContainer onClick={() => setShowDropdown(true)}>
        <SelectInput error={errors && errors[name]}>
          {isMulti && values.length === 0 && (
            <Placeholder variants={variants} initial="hidden" animate="visible">
              {placeholder}
            </Placeholder>
          )}
          {selectedOption}
        </SelectInput>
        {errorMessages()}
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
              onClick={(e) => e.stopPropagation()}
            >
              {options.map((option) => (
                <DropdownItem
                  key={option._id}
                  onClick={(e) => {
                    if (isMulti) {
                      onSelectMultipleItem(option);
                    } else {
                      onSelectItem(option);
                    }
                  }}
                >
                  {option.value}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </AnimatePresence>
      </SelectContainer>
    </OutsideClickHandler>
  );
};

export default Select;
