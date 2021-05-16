<template>
  <div>
    <GmapMap
      ref="map"
      :center="center"
      :zoom="14"
      style="width: 40vw; height: 80vh"
      @zoom_changed="commitNewMapBounds"
      @center_changed="commitNewMapBounds"
    >
      <GmapMarker
        :key="location.id"
        v-for="location in pizzeriasLocations"
        :position="location.location"
        :clickable="true"
        @click="handleMarkerClick(location.pizzeriaId)"
      />
      <GmapMarker
        v-if="userLocation"
        :position="userLocation"
        icon="http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
      />
    </GmapMap>
  </div>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
export default {
  name: 'GoogleMap',
  documentTitle: "Amsterdam's best pizza",
  data() {
    return {
      userLocation: null,
      center: { lat: 52.3676, lng: 4.9041 },
      bounds: {},
    };
  },
  mounted() {
    this.geolocate();
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
  },

  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    handleMarkerClick(pizzeriaId) {
      this.$router.push({
        path: `/`,
        query: { pizzeriaId },
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
