import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import DEV_API_KEY from '~/assets/dev-gmaps-api-key';

const environment = process.env.NODE_ENV || 'development';
let apikey = '';
if (environment === 'development') {
  apikey = DEV_API_KEY;
}
Vue.use(VueGoogleMaps, {
  load: {
    key: apikey || 'AIzaSyArszZeFgAR134GcoUJ1mka6ADh9PfYbnY',
    libraries: 'places',
  },
});
