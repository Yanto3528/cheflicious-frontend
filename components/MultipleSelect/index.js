import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { Close } from "../Icons";
import useToggle from "../../lib/hook/useToggle";
import { ChevronDown } from "../Icons";
import {
  MultipleSelectContainer,
  MultipleSelectInput,
  MultipleSelectItem,
  MultipleSelectItemCloseIcon,
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

const categoriesMockData = [
  {
    id: v4(),
    value: "breakfast",
  },
  {
    id: v4(),
    value: "lunch",
  },
  {
    id: v4(),
    value: "dinner",
  },
  {
    id: v4(),
    value: "pizza",
  },
  {
    id: v4(),
    value: "noodles",
  },
  {
    id: v4(),
    value: "chicken",
  },
];

let variants;

const MultipleSelect = ({
  placeholder,
  categories,
  onAdd,
  onRemove,
  errors,
}) => {
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  const [showDropdown, toggleShowDropdown, setShowDropdown] = useToggle(false);
  const [categoryList, setCategoryList] = useState(categoriesMockData);

  useEffect(() => {
    variants = plaholderStartVariants;
  }, []);

  const onSelectItem = (e, data) => {
    onAdd(data);
    setCategoryList(categoryList.filter((category) => category.id !== data.id));
  };

  const onRemoveSelectedItem = (data) => {
    onRemove(data.id);
    setCategoryList(
      [...categoryList, data].sort(function (a, b) {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      })
    );
    if (categories.length === 1) {
      if (variants !== placeholderVariants) {
        variants = placeholderVariants;
      }
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <MultipleSelectContainer onClick={() => setShowDropdown(true)}>
        <MultipleSelectInput error={errors && errors.category}>
          {categories.length === 0 && (
            <Placeholder variants={variants} initial="hidden" animate="visible">
              {placeholderText}
            </Placeholder>
          )}
          <AnimatePresence>
            {categories.map((category) => (
              <MultipleSelectItem
                key={category.id}
                variants={categoriesVariants}
                animate="visible"
                exit="exit"
              >
                <div>
                  <p>{category.value}</p>
                  <MultipleSelectItemCloseIcon
                    onClick={() => onRemoveSelectedItem(category)}
                  >
                    <Close />
                  </MultipleSelectItemCloseIcon>
                </div>
              </MultipleSelectItem>
            ))}
          </AnimatePresence>
        </MultipleSelectInput>
        {errors && errors.category && (
          <ErrorText>*Please choose at least 1 category</ErrorText>
        )}
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
              {categoryList.map((category) => (
                <DropdownItem
                  key={category.id}
                  onClick={(e) => onSelectItem(e, category)}
                >
                  {category.value}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </AnimatePresence>
      </MultipleSelectContainer>
    </OutsideClickHandler>
  );
};

export default MultipleSelect;
