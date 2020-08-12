const dropdownVariants = {
  hidden: {
    scaleY: 0.4,
    opacity: 0,
    originY: 0,
    y: "100%",
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    originY: 0,
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scaleY: 0.4,
    opacity: 0,
    originY: 0,
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

export default dropdownVariants;
