// import OutsideClickHandler from "react-outside-click-handler";
// import useToggle from "../../../lib/hook/useToggle";

// const SingleSelect = () => {
//   const [showDropdown, toggleShowDropdown, setShowDropdown] = useToggle(false);
//   return (
//     <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
//       <SelectContainer onClick={() => setShowDropdown(true)}>
//         <SelectInput error={errors && errors.category}>
//           {categories.length === 0 && (
//             <Placeholder variants={variants} initial="hidden" animate="visible">
//               {placeholder}
//             </Placeholder>
//           )}
//           <AnimatePresence>
//             {categories.map((category) => (
//               <SelectItem
//                 key={category.id}
//                 variants={categoriesVariants}
//                 animate="visible"
//                 exit="exit"
//               >
//                 <div>
//                   <p>{category.value}</p>
//                   <SelectItemCloseIcon
//                     onClick={() => onRemoveSelectedItem(category)}
//                   >
//                     <Close />
//                   </SelectItemCloseIcon>
//                 </div>
//               </SelectItem>
//             ))}
//           </AnimatePresence>
//         </SelectInput>
//         {errors && errors.category && (
//           <ErrorText>*Please choose at least 1 category</ErrorText>
//         )}
//         <IconContainer>
//           <ChevronDown />
//         </IconContainer>
//         <AnimatePresence>
//           {showDropdown && (
//             <Dropdown
//               variants={dropdownVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {categoryList.map((category) => (
//                 <DropdownItem
//                   key={category.id}
//                   onClick={(e) => onSelectItem(e, category)}
//                 >
//                   {category.value}
//                 </DropdownItem>
//               ))}
//             </Dropdown>
//           )}
//         </AnimatePresence>
//       </SelectContainer>
//     </OutsideClickHandler>
//   );
// };

// export default SingleSelect;
