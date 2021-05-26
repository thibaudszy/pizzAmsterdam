<template>
  <div
    v-if="pizzeriaInfo"
    :class="`${cardClass} card-class-general`"
    @click="handleCardClick"
  >
    <div class="card-class-info">
      <p class="text-lg">{{ pizzeriaInfo.name }}</p>
      <span :class="isOpenNow() ? 'green-dot' : 'red-dot'"> </span>
      <span class="font-semibold mb-2">
        {{ isOpenNow() ? 'open now' : 'closed' }}
      </span>
      <p class="mb-2">A witty review.</p>
      <button>full review</button>
    </div>
    <div class="card-class-image">
      <img
        src="https://lh3.googleusercontent.com/-CZXsyWYdfpc/AAAAAAAAAAI/AAAAAAAAAAA/QHSv9PE73cg/s88-p-k-no-ns-nd/photo.jpg"
        class="w-15 h-15 rounded-full mx-auto"
      />
    </div>
  </div>
</template>

<script>
import { framework } from 'vuetify';
import pizzeriasDetails from '@/assets/pizzeriasDetails';
export default {
  name: 'RestaurantCard',
  components: { ...framework },
  props: ['pizzeriaId'],
  computed: {
    selectedPizzeria() {
      const { pizzeriaId } = this.$route.query;
      return pizzeriaId;
    },
    pizzeriaInfo() {
      return pizzeriasDetails[this.pizzeriaId];
    },
    cardClass() {
      return this.pizzeriaId === this.selectedPizzeria
        ? 'p-2  border-2 border-yellow-300'
        : 'p-2  border-2 border-gray';
    },
  },
  methods: {
    handleCardClick() {
      // console.log({ pizzeriaId });
      this.$router.push({
        path: `/`,
        query: { pizzeriaId: this.pizzeriaId },
      });
    },
    isOpenNow() {
      const now = new Date();
      const today = now.getDay();
      const currentTime = `${now.getHours()}${now.getMinutes()}`;
      const openingHours = this.pizzeriaInfo['opening_hours'].periods;
      const todayOpeningHours = openingHours.filter(
        ({ open }) => open.day === today
      )[0];

      if (!todayOpeningHours) {
        return false;
      }
      if (
        currentTime < todayOpeningHours.open.time ||
        currentTime >= todayOpeningHours.close.time
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.green-dot {
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
.red-dot {
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}
.card-class-general {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
}
.card-class-image {
  width: 20%;
}
.card-class-info {
  width: 80%;
}
</style>
