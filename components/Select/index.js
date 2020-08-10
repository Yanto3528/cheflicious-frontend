import { useState, useEffect } from "react";
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

const Select = (props) => {
  const {
    isMulti,
    placeholder,
    options,
    values,
    name,
    onSelect,
    onAdd,
    onRemove,
    errors,
  } = props;
  const [showDropdown, toggleShowDropdown, setShowDropdown] = useToggle(false);
  const [optionData, setOptionData] = useState([]);

  useEffect(() => {
    variants = plaholderStartVariants;
  }, []);

  useEffect(() => {
    if (optionData.length === 0) {
      setOptionData(options);
    }
  }, [options]);

  const onSelectMultipleItem = (option) => {
    onAdd(option);
    setOptionData(optionData.filter((opt) => opt._id !== option._id));
  };

  const onSelectItem = (option) => {
    onSelect(option.value);
    setShowDropdown(false);
  };

  const onRemoveSelectedItem = (option) => {
    onRemove(option);
    setOptionData(
      [...optionData, option].sort(function (a, b) {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      })
    );
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
              {optionData.map((opt) => (
                <DropdownItem
                  key={opt._id}
                  onClick={(e) => {
                    if (isMulti) {
                      onSelectMultipleItem(opt);
                    } else {
                      onSelectItem(opt);
                    }
                  }}
                >
                  {opt.value}
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
