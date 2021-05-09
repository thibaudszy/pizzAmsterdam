<template>
  <div>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import pizzeriasList from '@/assets/pizzeriasList'
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 52.3676, lng: 4.9041 },
      markers: pizzeriasList.list,
    }
  },
  mounted() {
    this.geolocate()
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    },
  },
}
</script>
