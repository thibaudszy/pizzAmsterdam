<template>
  <div>
    <GmapMap :center="center" :zoom="14" style="width: 100%; height: 400px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
        :clickable="true"
        @click="handleMarkerClick(index)"
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
import list from '@/assets/pizzeriasList'
export default {
  name: 'GoogleMap',
  data() {
    return {
      userLocation: null,
      center: { lat: 52.3676, lng: 4.9041 },
      markers: [],
    }
  },
  mounted() {
    this.geolocate()
  },
  created() {
    for (let id in list) {
      this.markers.push(Object.values(list[id])[0].geometry.location)
    }
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        this.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    },
    handleMarkerClick(index) {
      this.$router.push({
        path: `/`,
        query: { pizzeria: this.markers[index].name },
      })
    },
  },
}
</script>
