import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyArszZeFgAR134GcoUJ1mka6ADh9PfYbnY',
    libraries: 'places',
  },
});
