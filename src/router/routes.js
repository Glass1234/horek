const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/contacts", component: () => import("pages/ContactsPage.vue") },
      { path: "/services", component: () => import("pages/ServicesPage.vue") },
      {
        path: "/portfolio",
        component: () => import("pages/PortfolioPage.vue"),
      },
      {
        path: "/project/:id",
        name: "project",
        component: () => import("pages/ProjectPage.vue"),
      },
      { path: "/ad", component: () => import("pages/AdvertisingPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
