import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { registerPlugins } from '@/plugins'
// import vuetify from 'vite-plugin-vuetify'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// registerPlugins(app)

app.use(vuetify).mount('#app')
