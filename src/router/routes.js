const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/home" },

      {
        path: "/home",
        component: () => import("pages/Home/HomePage.vue"),
        // children: [
        //   {
        //     path: "/home/namestaj",
        //     component: () => import("pages/Home/NamestajSaradniciPage.vue"),
        //     children: [
        //       {
        //         path: "/home/child/grandchild",
        //         component: () => import("pages/Home/GrandchildPage.vue"),
        //       },
        //     ],
        //   },
        //   {
        //     path: "/home/namestaj-po-meri",
        //     component: () => import("pages/Home/NamestajPoMeriPage.vue"),
        //     children: [
        //       {
        //         path: "/home/child/grandchild",
        //         component: () => import("pages/Home/GrandchildPage.vue"),
        //       },
        //     ],
        //   },
        // ],
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
          {
            path: "/namestaj/omiljeno",
            component: () => import("pages/omiljenoPage.vue"),
          },

          // {
          //   path: "/home/child/grandchild",
          //   component: () => import("pages/Home/GrandchildPage.vue"),
          // },
        ],
      },
      {
        path: "/namestaj-po-meri",
        component: () => import("pages/NamestajPoMeri/NamestajPoMeriPage.vue"),
        children: [
          {
            path: "/home/child/grandchild",
            component: () => import("pages/Home/GrandchildPage.vue"),
          },
        ],
      },
      {
        path: "/o-nama",
        component: () => import("pages/Onama/oNamaPage.vue"),
      },

      // {
      //   path: "/omiljeno",
      //   component: () => import("pages/omiljenoPage.vue"),
      // },
    ],
  },
  // {
  //   path: "/home/namestaj",
  //   component: () => import("pages/NamestajSaradniciPage.vue"),
  // },
  // {
  //   path: "/home/namestaj-po-meri",
  //   component: () => import("pages/NamestajPoMeriPage.vue"),
  // },
  // {
  //   path: "/home/kuhinje-i-trpezarije",
  //   component: () => import("pages/KuhinjeITrpezarijePage.vue"),
  // },
  // {
  //   path: "/home/dnevne-sobe",
  //   component: () => import("pages/DnevneSobePage.vue"),
  // },
  // {
  //   path: "/home/spavace-sobe",
  //   component: () => import("pages/SpavaceSobePage.vue"),
  // },
  // {
  //   path: "/home/decije-sobe",
  //   component: () => import("pages/DecijeSobePage.vue"),
  // },
  // {
  //   path: "/home/predsoblja",
  //   component: () => import("pages/PredsobljaPage.vue"),
  // },
  // {
  //   path: "/home/kancelarije",
  //   component: () => import("pages/KancelarijePage.vue"),
  // },
  // {
  //   path: "/home/ostalo",
  //   component: () => import("pages/OstaloPage.vue"),
  // },
  // {
  //   path: "/home/o-nama",
  //   component: () => import("pages/oNamaPage.vue"),
  // },

  // {
  //   path: "/home/selektovano",
  //   component: () => import("pages/selektovanoPage.vue"),
  // },
  // {
  //   path: "/omiljeno",
  //   component: () => import("pages/omiljenoPage.vue"),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
