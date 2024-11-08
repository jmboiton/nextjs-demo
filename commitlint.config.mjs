const configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["build", "chore", "docs", "feat", "fix", "refactor", "revert", "test"],
    ],
  },
};

export default configuration;
