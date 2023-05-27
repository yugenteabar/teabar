import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { contactFields } from "./templates";
import { galleryFields } from "./templates";
import { indexFields } from "./templates";
import { learn_templateFields } from "./templates";
import { menuFields } from "./templates";
import { news___events_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d1159053-388f-45cf-aa48-0baa22c19a16", // Get this from tina.io
  token: "76250a87016bc2c2e963afeab54445c86125250f", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
  tina: {
      mediaRoot: "/assets/images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: '_pages',
        format: 'md',
        templates: [
          {
            name: 'homepage',
            label: 'Homepage',
            fields: indexFields()
          },
          {
            name: 'about',
            label: 'About page',
            fields: aboutFields(),
          },
          {
            name: 'gallery',
            label: 'Gallery Page',
            fields: galleryFields(),
          },
          {
            name: 'contact',
            label: 'Contact page',
            fields: contactFields(),
          },
          {
            name: 'menu',
            label: 'Menu page',
            fields: menuFields(),
          },
        ]
      },
      {
        format: "md",
        label: "Events & News Posts",
        name: "events___news_posts",
        path: "news/_posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...news___events_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Learn Posts",
        name: "learn_posts",
        path: "learn/_posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...learn_templateFields(),
        ],
      },
    ],
  },
});
