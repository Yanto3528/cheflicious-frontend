import { EditOutline, TrashOutline } from "../Icons";
import { DropdownContainer, DropdownItem } from "./styles";
import dropdownVariants from "./variants";

const Dropdown = ({ onDelete, toggleEdit }) => {
  return (
    <DropdownContainer
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      <DropdownItem onClick={toggleEdit}>
        <EditOutline />
        <span>Edit</span>
      </DropdownItem>
      <DropdownItem onClick={onDelete}>
        <TrashOutline />
        <span>Delete</span>
      </DropdownItem>
    </DropdownContainer>
  );
};

export default Dropdown;
