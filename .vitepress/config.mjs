import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Columbine Wildlife Field Maps Docs",
  description:
    "Documentation on the development, use and structure of Field Maps Web Maps on the Columbine Ranger District.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "GIS", link: "/gis/" },
      { text: "TESP", link: "/tesp/" },
      { text: "NEPA", link: "/nepa/" },
      { text: "Policy", link: "/rd_policy/" },
    ],

    sidebar: {
      "/gis/": [
        {
          text: "GIS",
          items: [
            { text: "GIS Overview", link: "/gis" },
            {
              text: "Field Maps",
              items: [
                { text: "Field Maps Overview", link: "/gis/field-maps/" },
                {
                  text: "Raptor Database",
                  link: "/gis/field-maps/raptor-database",
                },
                {
                  text: "Silverspot Maps",
                  link: "/gis/field-maps/silverspot-maps-all",
                },
                {
                  text: "Wildlife Survey",
                  link: "/gis/field-maps/wildlife-survey",
                },
                {
                  text: "Other Misc Field Maps",
                  link: "/gis/field-maps/other-misc-maps",
                },
              ],
            },
            {
              text: "GIS Models",
              items: [
                {
                  text: "American Goshawk",
                  link: "gis/models/amgo",
                },
              ],
            },
          ],
        },
      ],
      "/tesp/": [
        {
          text: "TESP Species",
          items: [
            { text: "TESP Overview Species", link: "/tesp" },
            {
              text: "Threatened and Endangered",
              items: [
                {
                  text: "Threatened and Endangered Overview",
                  link: "/tesp/te",
                },
                { text: "Mexican Spotted Owl", link: "/tesp/te/mso" },
                {
                  text: "Southwestern Willow Flycatcher",
                  link: "/tesp/te/swwfl",
                },
                { text: "Silverpot", link: "/tesp/te/silverspot" },
                { text: "Uncompahgre fritillary", link: "/tesp/te/ufb" },
                { text: "Monarch", link: "/tesp/te/monarch" },
                { text: "Canada Lynx", link: "/tesp/te/canada-lynx" },
                {
                  text: "New Mexico Meadow Jumping Mouse",
                  link: "/tesp/te/nmmjm",
                },
                { text: "Other T and E", link: "/tesp/te/other-te" },
              ],
            },
          ],
        },
      ],
      "/nepa/": [
        {
          text: "NEPA",
          items: [
            { text: "NEPA Overview", link: "/nepa" },
            { text: "Biological Assessment", link: "/nepa/ba" },
            { text: "Biological Evaluation", link: "/nepa/be" },
            {
              text: "Wildlife Clearance and Categorical Exclusions",
              link: "/nepa/wc-ce",
            },
          ],
        },
      ],
      "/rd_policy/": [
        {
          text: "CRD Wildlife Policies",
          items: [
            { text: "CRD Wildlife Policies", link: "/rd_policy" },
            { text: "Raptor Policy", link: "/rd_policy/astur" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/mschmidty" }],
  },
});
