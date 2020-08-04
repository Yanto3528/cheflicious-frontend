export const recipeCardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const staggerVariants = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

export const addRecipeVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

export const dropdownVariants = {
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

export const categoriesVariants = {
  visible: {
    width: "auto",
  },
  exit: {
    width: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const placeholderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const plaholderStartVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};
