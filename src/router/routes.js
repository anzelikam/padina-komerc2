const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/home" },

      {
        path: "/home",
        component: () => import("pages/Home/HomePage.vue"),
      },

      {
        path: "/namestaj",
        component: () => import("pages/Namestaj/NamestajPage.vue"),
        children: [
          {
            path: "/namestaj/kuhinje-i-trpezarije",
            component: () =>
              import("pages/Namestaj/KuhinjeITrpezarijePage.vue"),
          },
          {
            path: "/namestaj/dnevne-sobe",
            component: () => import("pages/Namestaj/DnevneSobePage.vue"),
          },
          {
            path: "/namestaj/spavace-sobe",
            component: () => import("pages/Namestaj/SpavaceSobePage.vue"),
          },
          {
            path: "/namestaj/decije-sobe",
            component: () => import("pages/Namestaj/DecijeSobePage.vue"),
          },
          {
            path: "/namestaj/predsoblja",
            component: () => import("pages/Namestaj/PredsobljaPage.vue"),
          },
          {
            path: "/namestaj/kancelarije",
            component: () => import("pages/Namestaj/KancelarijePage.vue"),
          },
          {
            path: "/namestaj/ostalo",
            component: () => import("pages/Namestaj/OstaloPage.vue"),
          },
          // {
          //   path: "/namestaj/omiljeno",
          //   component: () => import("pages/omiljenoPage.vue"),
          // },
        ],
      },
      {
        path: "/omiljeno",
        component: () => import("pages/omiljenoPage.vue"),
      },
      {
        path: "/selektovanaGrupa",
        component: () =>
          import("components/saradnici/selektovanaGrupaNamestaja.vue"),
      },
      {
        path: "/namestaj-po-meri",
        component: () => import("pages/NamestajPoMeri/NamestajPoMeriPage.vue"),
      },
      {
        path: "/o-nama",
        component: () => import("pages/Onama/oNamaPage.vue"),
      },
      {
        path: "/katalozi",
        component: () => import("pages/Katalozi/KataloziPage.vue"),
      },
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
