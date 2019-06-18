const developmentSidebar = [
  {
    title: "Tutorial",
    collapsable: false,
    children: [
      ["", "Getting Started"],
      ["aos", "AOS"],
      ["bootstrap", "Bootstrap"],
      ["chart", "Chart"],
      ["google-maps", "Google Maps"],
      ["ionicons", "Ionicons"],
      ["postcss", "PostCSS"],
      ["prism", "Prism"],
      ["vue-lazyload", "Vue Lazyload"],
      ["vuex", "Vuex"],
      ["vuex-axios", "Vuex Axios"]
    ]
  }
];

module.exports = {
  ga: "UA-90535731-3",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans:400,600&display=swap"
      }
    ],
    ["script", { src: "https://unpkg.com/ionicons/dist/ionicons.js" }]
  ],
  locales: {
    "/": {
      lang: "en",
      title: "Yasmin ZY",
      description: "Front-end web developer based in Bandung."
    },
    "/id/": {
      lang: "id",
      title: "Yasmin ZY",
      description: "Front-end web developer di Bandung."
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        label: "English",
        lastUpdated: "Last updated",
        nav: [
          { text: "Home", link: "/" },
          { text: "Portfolio", link: "/portfolio" },
          { text: "Tutorial", link: "/tutorial/" }
        ],
        selectText: "Languages",
        serviceWorker: {
          updatePopup: true
        },
        sidebar: { "/tutorial/": developmentSidebar }
      },
      "/id/": {
        editLinkText: "Sunting halaman ini",
        label: "Indonesia",
        lastUpdated: "Terakhir diperbarui",
        nav: [
          { text: "Beranda", link: "/id/" },
          { text: "Portofolio", link: "/id/portfolio" },
          { text: "Tutorial", link: "/id/tutorial" }
        ],
        selectText: "Bahasa",
        serviceWorker: {
          updatePopup: {
            message: "Ada konten baru",
            buttonText: "Refresh"
          }
        },
        sidebar: { "/id/tutorial/": developmentSidebar }
      }
    },
    logo: "/logo.png",
    repo: "yasminzy/yasminzy"
  }
};
