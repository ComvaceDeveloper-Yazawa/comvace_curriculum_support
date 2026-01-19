import DefaultTheme from "vitepress/theme";
import DemoPreview from "../components/DemoPreview.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("DemoPreview", DemoPreview);
  },
};
