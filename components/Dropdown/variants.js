const dropdownVariants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
    originY: 0,
    originX: 1,
    y: "100%",
  },
  visible: {
    scale: 1,
    opacity: 1,
    originY: 0,
    originX: 1,
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 0.4,
    opacity: 0,
    originY: 0,
    originX: 1,
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

export default dropdownVariants;
