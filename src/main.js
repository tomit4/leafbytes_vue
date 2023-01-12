import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'prismjs/prism.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-yaml.js'
import 'prismjs/components/prism-lua.js'
import 'prismjs/components/prism-javascript.js'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
