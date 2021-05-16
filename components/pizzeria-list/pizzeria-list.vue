<template>
  <div
    class="mr-8 border-2 border-black flex flex-col align-items-center overflow-auto height-80vh"
  >
    <restaurant-card
      v-for="id in pizzeriasIdsToDisplay"
      :key="id"
      :pizzeriaId="id"
    />
  </div>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
import RestaurantCard from './RestaurantCard';
export default {
  components: {
    RestaurantCard,
  },
  computed: {
    pizzeriasIdsToDisplay() {
      const pizzeriasIds = Object.keys(pizzeriasDetails);
      return pizzeriasIds.filter((id) => this.isWithinMapBounds(id));
    },
    mapBounds() {
      return this.$store.state.mapBounds;
    },
  },
  methods: {
    isWithinMapBounds(pizzeriaId) {
      if (!this.mapBounds.latitudes) {
        return true;
      }
      const { latitudes, longitudes } = this.mapBounds;
      console.log({ latitudes });
      const pizzeriaLocation = pizzeriasDetails[pizzeriaId].geometry.location;
      if (
        pizzeriaLocation.lat < latitudes.min ||
        pizzeriaLocation.lat > latitudes.max
      ) {
        console.log(
          'pizzeriaLocation.lat < latitudes.min',
          pizzeriaLocation.lat,
          latitudes.min
        );
        return false;
      }
      if (
        pizzeriaLocation.lng < longitudes.min ||
        pizzeriaLocation.lng > longitudes.max
      ) {
        console.log('lng');
        return false;
      }
      return true;
    },
  },
};
</script>

<style></style>
