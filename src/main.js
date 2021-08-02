import { createApp } from 'vue'
import App from './App.vue'
import store from './Items/Store'
import Basecard from './Components/Basecard'

const app=createApp(App)
app.component("basecard",Basecard)
app.use(store)
app.mount("#app")