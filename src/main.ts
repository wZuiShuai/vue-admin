import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index";
import { createPinia } from 'pinia'

// 引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-message.css'


const app = createApp(App);
app.use(router);
app.use(createPinia())
app.mount("#app");
