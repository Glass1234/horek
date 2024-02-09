export default {
  filter: ["Все", "Графика", "Веб"],
  items: [
    {
      id: 1,
      title: "Horektrade 1",
      description: "automatic crypto exchanger Графика",
      type: "Графика",
      content: [
        { type: "img", src: require("assets/images/horek.png") },
        {
          type: "text",
          title: "Lorem ipsum.",
          description:
            "Lorem ipsum dolor sit amet consectetur. Diam viverra hendrerit sagittis lacus sit placerat. Ultrices enim id sed enim. Accumsan enim morbi sapien non bibendum amet in eu non. Pretium enim vulputate hendrerit pharetra malesuada faucibus.",
        },
        { type: "img", src: require("assets/images/horek.png") },
        {
          type: "text",
          title: "Lorem ipsum.",
          description:
            "Lorem ipsum dolor sit amet consectetur. Diam viverra hendrerit sagittis lacus sit placerat. Ultrices enim id sed enim. Accumsan enim morbi sapien non bibendum amet in eu non. Pretium enim vulputate hendrerit pharetra malesuada faucibus.",
        },
      ],
    },
    {
      id: 2,
      title: "Horektrade 2",
      description: "automatic crypto exchanger Веб",
      type: "Веб",
      content: [],
    },
    {
      id: 3,
      title: "Horektrade 3",
      description: "automatic crypto exchanger Графика",
      type: "Графика",
      content: [],
    },
  ],
};
