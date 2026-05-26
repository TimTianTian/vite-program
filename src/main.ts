import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupElementPlus } from './plugins/element-plus'

const app = createApp(App)
setupElementPlus(app)
app.mount('#app')
