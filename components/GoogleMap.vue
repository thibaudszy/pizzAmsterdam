<template>
  <client-only placeholder="Loading map">
    <div class="h-full">
      <GmapMap
        ref="map"
        :center="center"
        :zoom="zoom"
        style="height: 100%"
        @zoom_changed="commitNewMapBounds"
        @center_changed="commitNewMapBounds"
      >
        <GmapMarker
          v-if="userLocation"
          :position="userLocation"
          :icon="userMarker"
          :zIndex="20"
        />
        <GmapMarker
          v-for="location in pizzeriasLocations"
          :key="location.pizzeriaId"
          :position="location.location"
          :clickable="true"
          @click="handleMarkerClick(location.pizzeriaId)"
          :icon="
            isSelectedPizzeria(location.pizzeriaId) ? redMarker : blueMarker
          "
          :zIndex="10"
        />
      </GmapMap>
      <button
        v-if="!userLocation"
        class="geolocate-button hover:text-black"
        type="button"
        title="Activate geolocation"
        aria-label="Activate geolocation"
        @click="geolocate()"
      >
        <v-icon style="color: inherit"> mdi-target </v-icon>
      </button>
    </div>
  </client-only>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
import blueMarker from '@/assets/images/markers/marker-blue.svg';
import redMarker from '@/assets/images/markers/marker-red.svg';
import markerUser from '@/assets/images/markers/marker-user.svg';

export default {
  name: 'GoogleMap',
  documentTitle: "Amsterdam's best pizza",
  data() {
    return {
      userLocation: null,
      center: { lat: 52.3676, lng: 4.9041 },
      bounds: {},
      mapDot: {},
      zoom: 13,
    };
  },
  created() {
    this.blueMarker = blueMarker;
    this.redMarker = redMarker;
    this.userMarker = markerUser;
  },
  async mounted() {
    const permissionStatus = await navigator.permissions.query({
      name: 'geolocation',
    });
    // if (permissionStatus?.state === 'granted') this.geolocate();
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
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.center = this.userLocation;
        // In a timeout to avoid a clash the commitNewMapBounds event running twice at the same time
        // which causes the bounds of the map to be wrong.
        setTimeout(() => (this.zoom = 15), 10);
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
<style scoped>
.geolocate-button {
  background-color: rgb(255, 255, 255);
  height: 40px;
  width: 40px;
  position: relative;
  bottom: 60px;
  left: 10px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
  border-radius: 2%;
  color: grey;
}
</style>
