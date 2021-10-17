import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import DEV_API_KEY from '~/assets/dev-gmaps-api-key';

Vue.use(VueGoogleMaps, {
  load: {
    key: DEV_API_KEY || 'AIzaSyArszZeFgAR134GcoUJ1mka6ADh9PfYbnY',
    libraries: 'places',
  },
});
