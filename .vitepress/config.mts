import { defineConfig } from "vitepress";
import { HeadConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eos OSC Docs (Unofficial)",
  rewrites: {
    "README.md": "index.md"
  },
  lastUpdated: true,
  cleanUrls:true,
  base: "/Eos-OSC-Docs/",
  sitemap: {
    hostname: "https://mapletwine.github.io/Eos-OSC-Docs/",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Unofficial Docs", link: "/" },
      { text: "ETC Eos Home", link: "https://www.etcconnect.com/Products/Consoles/Eos-Consoles/Eos-Home.aspx" },
    ],

    sidebar: [
      {
        text: 'Eos OSC Docs (Unofficial)',
        link: '/',
        items: [
          { text: "Connecting", link: "/connecting" },
          { text: "List of commands", link: "/list-of-commands" },
          { text: "Advanced", link: "/advanced" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mapletwine/eos-osc-docs" },
    ],
    search: {
      provider: "local",
    },
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/mapletwine/eos-osc-docs/edit/main/:path'
    },
  },
  transformHead: (context) => {
    const head: HeadConfig[] = [];
    const pageData = context.pageData;

    head.push([
      "meta",
      {
        property: "og:title",
        content: pageData.frontmatter.title || pageData.title,
      },
    ]);
    head.push([
      "meta",
      {
        property: "og:description",
        content: pageData.frontmatter.description || pageData.description,
      },
    ]);

    return head;
  },
});
