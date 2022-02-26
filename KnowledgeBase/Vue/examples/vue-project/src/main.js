import { createApp } from 'vue'
import App from './App.vue'

import router from './router.config.js'
import store from './store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

createApp(App)
	.use(router)
	.use(store)
	.mount('#app')


