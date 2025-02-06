import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ["activeTab", "scripting", "clipboardWrite"],
    "web_accessible_resources": [
    {
      "matches": ["*://*.linkedin.com/*"],
      "resources": ["icon/*.png"]
    }
  ]
  },
  
});
