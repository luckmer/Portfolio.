const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

export const projectVariants = {
  visible: (custom) => ({
    top: 0,
    transition: { ...transition, delay: custom, duration: 0.5 }
  }),

  hidden: () => ({
    top: "-40vmin"
  })
};

export const technologyVariant = {
  visible: () => ({
    left: 0,
    transition: { ...transition, delay: 0.7, duration: 2 }
  }),

  hidden: () => ({
    left: "-100%"
  })
};

export const ImgVariant = {
  visible: () => ({
    left: 0,
    opacity: 1,
    transition: { ...transition }
  }),

  hidden: () => ({
    left: "-100%",
    opacity: 0,
    transition: { ...transition }
  })
};
