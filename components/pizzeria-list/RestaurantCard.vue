<template>
  <div v-if="pizzeriaInfo" :class="cardClass">
    <p class="text-lg">{{ pizzeriaInfo.name }}</p>
    <span :class="isOpenNow() ? 'green-dot' : 'red-dot'"> </span>
    <span class="font-semibold mb-2">
      {{ isOpenNow() ? 'open now' : 'closed' }}
    </span>
    <p class="mb-2">
      An awesome review. Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
      ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </p>
    <nuxt-link :to="`/full-reviews/${pizzeriaInfo.company_name}`"
      >full review</nuxt-link
    >
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
    pizzeriaIdUrl() {
      const { pizzeriaId } = this.$route.query;
      return pizzeriaId;
    },
    pizzeriaInfo() {
      return pizzeriasDetails[this.pizzeriaId];
    },
    cardClass() {
      return this.pizzeriaId === this.pizzeriaIdUrl
        ? 'p-2  border-2 border-yellow-300'
        : 'p-2  border-2 border-black';
    },
  },
  methods: {
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
</style>
