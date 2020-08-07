import LoadingIcon from "../../styles/shared/LoadingIcon";

const loadingVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      loop: Infinity,
      ease: "linear",
    },
  },
};

const Spinner = (props) => {
  return (
    <LoadingIcon
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      {...props}
    />
  );
};

export default Spinner;
