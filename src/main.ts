import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import { createRouter } from "./router"
import { createPinia } from 'pinia'

const app = createApp(App);

app.use(createRouter(app))
   .use(createPinia())
   .mount("#app");