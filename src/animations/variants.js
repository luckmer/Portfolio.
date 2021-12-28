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

export const Bannervariant = {
  visible: (custom) => ({
    top: 0,
    transition: { ...textTransition, delay: custom }
  }),

  hidden: () => ({
    top: "40vmin"
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

export const squareVariants = {
  visible: {
    top: "0vmin",
    transition: { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] }
  },
  hidden: {
    top: "20vmin"
  }
};

export const arrowVariant = {
  visible: () => ({
    left: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.9] }
  }),

  hidden: () => ({
    left: "-15vmin"
  })
};

export const ContactVariant = {
  visible: (custom) => ({
    top: 0,
    transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: custom }
  }),

  hidden: (custom) => ({
    top: "30vmin"
  })
};

export const TextVariant = {
  visible: (custom) => ({
    top: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: custom }
  }),

  hidden: () => ({
    top: "30vmin",
    opacity: 0
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
    transition: { ease: [0.6, 0.01, -0.05, 0.9], delay: 1 }
  }),

  hidden: () => ({
    opacity: 0
  })
};
