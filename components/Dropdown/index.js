import { EditOutline, TrashOutline } from "../Icons";
import { DropdownContainer, DropdownItem } from "./styles";
import dropdownVariants from "./variants";

const Dropdown = () => {
  return (
    <DropdownContainer
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <DropdownItem>
        <EditOutline />
        <span>Edit</span>
      </DropdownItem>
      <DropdownItem>
        <TrashOutline />
        <span>Delete</span>
      </DropdownItem>
    </DropdownContainer>
  );
};

export default Dropdown;
