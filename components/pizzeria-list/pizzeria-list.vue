<template>
  <div
    class="border-2 border-black flex flex-col align-items-center overflow-auto height-80vh direction-rtl"
  >
    <restaurant-card
      v-for="id in pizzeriasIdsToDisplay"
      :key="id"
      :pizzeriaId="id"
      class="direction-ltr"
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
      const pizzeriaLocation = pizzeriasDetails[pizzeriaId].geometry.location;
      if (
        pizzeriaLocation.lat < latitudes.min ||
        pizzeriaLocation.lat > latitudes.max
      ) {
        return false;
      }
      if (
        pizzeriaLocation.lng < longitudes.min ||
        pizzeriaLocation.lng > longitudes.max
      ) {
        return false;
      }
      return true;
    },
    handleCardClick(pizzeriaId) {
      console.log({ pizzeriaId });
      this.$router.push({
        path: `/`,
        query: { pizzeriaId },
      });
    },
  },
};
</script>

<style>
.direction-rtl {
  direction: rtl;
}
.direction-ltr {
  direction: ltr;
}
</style>
