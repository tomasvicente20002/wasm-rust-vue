import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import init from 'local-wasm'


init()
createApp(App).mount('#app')
