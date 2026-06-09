import { createApp } from 'vue'
import App from './App.vue'

// Styles globaux : d'abord les tokens (variables), puis le reset/base.
import './assets/styles/tokens.css'
import './assets/styles/main.css'

console.log('Vue app starting...')
const app = createApp(App)
console.log('App created:', app)
app.mount('#app')
console.log('App mounted to #app')
