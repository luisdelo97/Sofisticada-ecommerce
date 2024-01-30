import { visionTool } from "@sanity/vision";
import { StudioNavbar } from "./src/components/StudioNavbar";
import { Config } from "sanity";
// import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { msTheme } from "./src/theme";

export const config: Config = {
  name: "default",
  title: "Sofisticada",
  basePath: "/studio",

  projectId: "b071ypz4",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: msTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
