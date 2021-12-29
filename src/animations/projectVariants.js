const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

export const projectVariants = {
  visible: (custom) => ({
    top: 0,
    rotation: 0.06,
    transition: { type: "spring", top: { delay: custom, duration: 0.5 } }
  }),

  hidden: (custom) => ({
    top: "-40vmin",
    rotation: 0.06,
    transition: { type: "spring", top: { delay: custom, duration: 0.5 } }
  })
};

export const technologyVariant = {
  visible: () => ({
    left: 0,
    rotation: 0.06,

    transition: { type: "spring", left: { delay: 0.7, duration: 2 } }
  }),

  hidden: () => ({
    left: "-100%",
    rotation: 0.06,

    transition: { type: "spring", left: { delay: 0.7, duration: 2 } }
  })
};

export const ImgVariant = {
  visible: () => ({
    left: 0,
    opacity: 1,
    rotation: 0.06,

    transition: { type: "spring", left: { duration: 1 } }
  }),

  hidden: () => ({
    left: "-100%",
    opacity: 0,
    rotation: 0.06,

    transition: { type: "spring", left: { duration: 1 } }
  })
};
