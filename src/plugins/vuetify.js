/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'material-icons-font/material-icons-font.css';
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#CDDC39',
          secondary: '#DCE775',

          first: '#1B5E20',
          second: '#689F38',
          third: '#9E9D24', //blue-grey-darken-1
          fourth: '#78909C', //red

          background: '#546E7A', //deep-purple
          wrapper: '#CDDC39', //lime
          test: '#E65100',
          textFirst: '#263238', // hero
          textSecond: '#FFFDE7', // hero
          textThird: '#455A64', //
          bgFirst: '#ECEFF1', // sideblock
          bgSecond: '#546E7A', // hero
          bgThird: '#CFD8DC', // hero
        },
      },
    },

  },

})
