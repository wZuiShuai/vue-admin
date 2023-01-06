import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-loading.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
//全局引入icon做动态菜单
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router);
app.use(pinia)
app.mount("#app");
