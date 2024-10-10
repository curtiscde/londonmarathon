module.exports = {
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!**/public/**",
    "!**/types/**",
    "!**.config.{js,ts}",
    "!next-env.d.ts"
  ]
}
