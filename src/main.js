import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#CDDC39',
          secondary: '#DCE775',

          first: '#1B5E20',
          second: '#689F38',
          third: '#9E9D24',
          fourth: '#78909C',
        },
      },
    },

  },
})

const app = createApp(App)


app.use(vuetify).mount('#app')
