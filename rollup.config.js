import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        dir: "dist/",
        format: "esm",
        preserveModules: true,
      },
    ],
    plugins: [
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve({ extensions: [".js", ".ts"] }),
      typescript({
        sourceMap: true,
        declaration: true,
        declarationMap: true,
      }),
      terser(),
    ],
  },
];
