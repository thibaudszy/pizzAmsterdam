<template>
  <div class="h-full">
    <GmapMap
      ref="map"
      :center="center"
      :zoom="13"
      style="height: 100%"
      @zoom_changed="commitNewMapBounds"
      @center_changed="commitNewMapBounds"
    >
      <GmapMarker
        v-for="location in pizzeriasLocations"
        :key="location.pizzeriaId"
        :position="location.location"
        :clickable="true"
        @click="handleMarkerClick(location.pizzeriaId)"
        :icon="isSelectedPizzeria(location.pizzeriaId) ? redMarker : blueMarker"
      />
      <!-- <GmapMarker v-if="userLocation" :position="userLocation" :icon="mapDot" /> -->
    </GmapMap>
  </div>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
import mapDot from '@/assets/images/map-dot';
import blueMarker from '@/assets/images/markers/marker-blue.svg';
import redMarker from '@/assets/images/markers/marker-red.svg';

export default {
  name: 'GoogleMap',
  documentTitle: "Amsterdam's best pizza",
  data() {
    return {
      userLocation: null,
      center: { lat: 52.3676, lng: 4.9041 },
      bounds: {},
      mapDot: {},
    };
  },
  created() {
    this.blueMarker = blueMarker;
    this.redMarker = redMarker;
  },
  mounted() {
    // this.geolocate();
    this.mapDot = mapDot;
  },

  computed: {
    pizzeriasLocations() {
      const markers = [];
      for (let pizzeriaId in pizzeriasDetails) {
        markers.push({
          pizzeriaId, // same as the googleId
          location: pizzeriasDetails[pizzeriaId].geometry.location,
          name: pizzeriasDetails[pizzeriaId].name,
        });
      }
      return markers;
    },
    selectedPizzeria() {
      const { pizzeriaId } = this.$route.query;
      return pizzeriaId;
    },
  },
  methods: {
    isSelectedPizzeria(pizzeriaId) {
      return this.selectedPizzeria === pizzeriaId;
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.center = {
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude,
        // };
        this.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    handleMarkerClick(pizzeriaId) {
      this.$router.push({
        path: `/`,
        query: { pizzeriaId, screen: 'review' },
      });
    },
    commitNewMapBounds() {
      try {
        const newBounds = this.$refs.map.$mapObject.getBounds();
        const NEPoint = newBounds.getNorthEast();
        const SWPoint = newBounds.getSouthWest();

        this.$store.commit('refreshBounds', {
          latitudes: { min: SWPoint.lat(), max: NEPoint.lat() },
          longitudes: { min: SWPoint.lng(), max: NEPoint.lng() },
        });
      } catch {
        return;
      }
    },
  },
};
</script>
<style></style>
