<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
    </div>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px" />
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 52.3676, lng: 4.9041 },
    }
  },
}
</script>
