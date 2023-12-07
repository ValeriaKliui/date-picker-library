import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svg from "rollup-plugin-svg";
import packageJson from "./package.json" assert { type: "json" };
import { babel } from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      svg(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
      // resolve({
      //   extensions: [
      //     ".mjs",
      //     ".js",
      //     ".json",
      //     ".node",
      //     ".jsx",
      //     ".tsx",
      //     ".ts",
      //     ".svg",
      //     ".woff",
      //   ],
      // }),
      // commonjs(),
      // typescript({
      //   tsconfig: "./tsconfig.json",
      //   exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      // }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts.default()],
  },
];
