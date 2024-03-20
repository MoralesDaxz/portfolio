export const container = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "linear",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      delayChildren: 0.3,
      staggerChildren: 0.2
    },
  },
};
export const nextItems = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 15,
    transition: {
      type: "linear",
      delay: 0.5,
      stiffness: 300,
    },
  },
};

