import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router.ts'

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar, {
    plugins: {},
})
app.use(pinia)
app.use(router)
app.mount('#app')
