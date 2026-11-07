import { defineConfig } from "@playwright/test";

// Behavior smoke test against a static Storybook build, served the way GitHub
// Pages serves it (under /jsx-icons/). It never runs the Storybook dev server.
//   npm run test:smoke                                 (tests the committed docs/)
//   STORYBOOK_DIR=<build dir> npm run test:smoke       (tests another static build,
//                                                       e.g. build-storybook -o <dir>)
// PORT picks the local port (default 6008).
const port = Number(process.env.PORT ?? 6008);
const dir = process.env.STORYBOOK_DIR ?? "docs";

export default defineConfig({
  testDir: "tests",
  reporter: "list",
  timeout: 120_000,
  workers: 1,
  webServer: {
    command: `node tests/serve-storybook.mjs "${dir}" ${port} /jsx-icons`,
    url: `http://127.0.0.1:${port}/jsx-icons/iframe.html`,
    reuseExistingServer: false,
  },
  use: {
    baseURL: `http://127.0.0.1:${port}/jsx-icons/`,
    // The installed Google Chrome, so no Playwright browser download is needed.
    channel: "chrome",
    viewport: { width: 1280, height: 800 },
  },
});
