import { visionTool } from "@sanity/vision";
import { StudioNavbar } from "./src/components/StudioNavbar";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { msTheme } from "./src/theme";

const config = defineConfig({
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
});

export default config;
