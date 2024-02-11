const data = {
  filter: ["Все"],
  items: [
    {
      id: 1,
      title: "Медицинская лавка",
      type: "Логотип",
      src_preview: require("assets/projects/preview/1.png"),
      content: [],
    },
    {
      id: 2,
      title: "Ani-me",
      type: "Логотип",
      src_preview: require("assets/projects/preview/2.png"),
      content: [],
    },
    {
      id: 3,
      title: "Статус",
      type: "Логотип",
      src_preview: require("assets/projects/preview/3.png"),
      content: [],
    },
    {
      id: 4,
      title: "Adolla",
      type: "Логотип",
      src_preview: require("assets/projects/preview/4.png"),
      content: [],
    },
    {
      id: 5,
      title: "MilkShake",
      type: "Логотип",
      src_preview: require("assets/projects/preview/5.png"),
      content: [],
    },
    {
      id: 6,
      title: "Star",
      type: "Логотип",
      src_preview: require("assets/projects/preview/6.png"),
      content: [],
    },
    {
      id: 7,
      title: "Homee",
      type: "Логотип",
      src_preview: require("assets/projects/preview/7.png"),
      content: [],
    },
    {
      id: 8,
      title: "Naskal",
      type: "Логотип",
      src_preview: require("assets/projects/preview/8.png"),
      content: [],
    },
    {
      id: 9,
      title: "TurtlBow",
      type: "Логотип",
      src_preview: require("assets/projects/preview/9.png"),
      content: [],
    },
    {
      id: 10,
      title: "Horek",
      type: "Логотип",
      src_preview: require("assets/projects/preview/10.png"),
      content: [],
    },
    {
      id: 11,
      title: "Enterium",
      type: "Логотип",
      src_preview: require("assets/projects/preview/11.png"),
      content: [],
    },
    {
      id: 12,
      title: "ExtraMedia",
      type: "SMM - Дизайн",
      src_preview: require("assets/projects/preview/12.png"),
      content: [],
    },
    {
      id: 13,
      title: "Отработка Discord",
      type: "Баннер",
      src_preview: require("assets/projects/preview/13.png"),
      content: [],
    },
    {
      id: 14,
      title: "Node.Js разработчик",
      type: "Баннер",
      src_preview: require("assets/projects/preview/14.png"),
      content: [],
    },
    {
      id: 15,
      title: "NeverHode Cloud",
      type: "Баннер",
      src_preview: require("assets/projects/preview/15.png"),
      content: [],
    },
    {
      id: 16,
      title: "Xitory Cloud",
      type: "Баннер",
      src_preview: require("assets/projects/preview/16.png"),
      content: [],
    },
    {
      id: 17,
      title: "Prosto Team",
      type: "Баннер",
      src_preview: require("assets/projects/preview/17.png"),
      content: [],
    },
    {
      id: 18,
      title: "Монетизация аккаунта",
      type: "Креатив",
      src_preview: require("assets/projects/preview/18.png"),
      content: [],
    },
    {
      id: 19,
      title: "Ani-me",
      type: "Сайт",
      src_preview: require("assets/projects/preview/19.png"),
      content: [],
    },
    // {
    //   id: 1,
    //   title: "Horektrade 1",
    //   description: "automatic crypto exchanger Графика",
    //   type: "Графика",
    //   content: [
    //     { type: "img", src: require("assets/images/horek.png") },
    //     {
    //       type: "text",
    //       title: "Lorem ipsum.",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur. Diam viverra hendrerit sagittis lacus sit placerat. Ultrices enim id sed enim. Accumsan enim morbi sapien non bibendum amet in eu non. Pretium enim vulputate hendrerit pharetra malesuada faucibus.",
    //     },
    //     { type: "img", src: require("assets/images/horek.png") },
    //     {
    //       type: "text",
    //       title: "Lorem ipsum.",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur. Diam viverra hendrerit sagittis lacus sit placerat. Ultrices enim id sed enim. Accumsan enim morbi sapien non bibendum amet in eu non. Pretium enim vulputate hendrerit pharetra malesuada faucibus.",
    //     },
    //   ],
    // },
  ],
};

const tmp = Array.from(new Set(data.items.map((item) => item.type)));
data.filter = [...data.filter, ...tmp];

export default data;
