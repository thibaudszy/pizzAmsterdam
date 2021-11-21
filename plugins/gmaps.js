import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

export default ({ $config: { gmapsApiKey } }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: gmapsApiKey,
      libraries: 'places',
    },
  });
};
