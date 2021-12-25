import { transition, textTransition } from "./index";

export const variants = {
  visible: (custom) => ({
    left: "0%",
    transition: { ...transition, delay: custom }
  }),

  hidden: (custom) => ({
    left: "100%",
    transition: { ...transition, delay: custom }
  })
};

export const projectVariants = {
  visible: (custom) => ({
    top: 0,
    transition: { ...textTransition, delay: custom }
  }),

  hidden: (custom) => ({
    top: "15vmin",
    transition: { ...textTransition, delay: custom }
  })
};

export const arrowVariant = {
  visible: () => ({
    left: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.9] }
  }),

  hidden: () => ({
    left: "-15vmin",
    transition: { ease: [0.6, 0.01, -0.05, 0.9] }
  })
};

export const numberVariant = {
  visible: () => ({
    top: 0,
    transition: { ...textTransition, delay: 0.1 }
  }),

  hidden: () => ({
    top: "40vmin",
    transition: { ...textTransition, delay: 0.1 }
  })
};

export const navVariant = {
  visible: () => ({
    left: "0%",
    transition: { ease: [0.6, 0.01, -0.05, 0.9] }
  }),

  hidden: () => ({
    left: "100%",
    transition: {
      duration: 2,
      ease: [1, 0.01, -0.05, 0.9]
    }
  })
};

export const footerVariant = {
  visible: () => ({
    opacity: 1,
    transition: { ease: [0.6, 0.01, -0.05, 0.9] }
  }),

  hidden: () => ({
    opacity: 0,
    transition: {
      ease: [1, 0.01, -0.05, 0.9]
    }
  })
};
