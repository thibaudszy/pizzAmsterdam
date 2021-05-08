import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GOOGLE_MAPS_API_KEY from '@/assets/secrets'

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_MAPS_API_KEY,
    libraries: 'places',
  },
})
