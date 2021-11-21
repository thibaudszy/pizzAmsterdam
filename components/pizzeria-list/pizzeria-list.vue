<template>
  <div class="list-area-style">
    <div
      v-for="id in pizzeriasIdsToDisplay"
      :key="id"
      class="restaurant-card-wrapper"
    >
      <restaurant-card :pizzeriaId="id" />
      <div class="separator" />
    </div>
  </div>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails';
import RestaurantCard from './RestaurantCard';
export default {
  components: {
    RestaurantCard,
  },
  props: {
    isMobile: { type: Boolean, default: false },
  },
  computed: {
    pizzeriasIdsToDisplay() {
      const pizzeriasIds = Object.keys(pizzeriasDetails);
      return this.isMobile
        ? pizzeriasIds
        : pizzeriasIds.filter((id) => this.isWithinMapBounds(id));
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
      this.$router.push({
        path: `/`,
        query: { pizzeriaId },
      });
    },
  },
};
</script>

<style>
.list-area-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  direction: rtl;
}
.restaurant-card {
  direction: ltr;
}
.separator {
  height: 1px;
  width: 80%;
  background: grey;
}
.restaurant-card-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
}
</style>
