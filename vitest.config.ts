import nextEnv from "@next/env";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

const { loadEnvConfig } = nextEnv;
const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    exclude: [...configDefaults.exclude, "**/{commitlint,next}.config.*"],
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        "**/{commitlint,next}.config.*",
      ],
    },
  },
});
