import './assets/main.css'
import './assets/js/jquery-1.11.1.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/bootstrap-datepicker.js'
import './assets/js/custom.js'




import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


