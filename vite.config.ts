import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc, // 设置 `@` 指向 `src` 目录
    },
    extensions: [".ts",".js", ".json", '.mjs'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/style/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // IconsResolver({
        //   prefix: "Icon",
        // }),
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // IconsResolver({
        //   enabledCollections: ["ep"],
        // }),
        ElementPlusResolver({ importStyle: "sass" }),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    // Icons({
    //   autoInstall: true,
    // }),
  ],
  base: "./", // 设置打包路径
});
