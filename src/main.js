import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import sal from 'sal.js'
import 'sal.js/dist/sal.css'
import animate from './directives/animate'

// 🔁 Tangkap redirect dari 404.html
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')

if (redirect) {
  window.history.replaceState(null, null, redirect)
}

const app = createApp(App)

app.directive('animate', animate)
app.use(router)
app.mount('#app')
sal()
