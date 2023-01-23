<template>
  <nuxt-link
    v-if="pizzeriaInfo"
    class="flex w-full items-center p-2 text-left justify-around flex-row-reverse bg-white hover:bg-gray-100"
    :aria-label="`Show the review for ${pizzeriaInfo.name}`"
    :class="isSelected(pizzeriaId)"
    :to="{
      path: `/`,
      query: { pizzeriaId: this.pizzeriaId, screen: 'review' },
    }"
  >
    <div class="w-4/5">
      <p class="text-lg">{{ pizzeriaInfo.name }}</p>
      <span
        class="h-3 w-3 rounded-full inline-block"
        :class="isOpenNow() ? ' bg-green-600' : ' bg-red-600'"
      >
      </span>
      <span class="font-semibold mb-2">
        {{ isOpenNow() ? 'open now' : 'closed' }}
      </span>
      <p class="mb-2">{{ rating }}</p>
    </div>
    <div class="w-15-percent">
      <nuxt-img
        :src="`logos/${getLogo(pizzeriaInfo.companyName || pizzeriaInfo.name)}`"
        class="rounded-full"
      ></nuxt-img>
    </div>
  </nuxt-link>
</template>

<script>
import pizzeriasDetails from '@/assets/pizzeriasDetails.json';
import pizzeriasReviewsAndData from '@/assets/pizzeriasReviewsAndData.json';
import pizzeriasLogos from '@/assets/pizzeriasLogos.json';

export default {
  name: 'RestaurantCard',

  props: {
    pizzeriaId: { type: String, required: true },
  },
  computed: {
    selectedPizzeria() {
      const { pizzeriaId } = this.$route.query;
      return pizzeriaId;
    },
    pizzeriaInfo() {
      return pizzeriasDetails[this.pizzeriaId];
    },
    rating() {
      return pizzeriasReviewsAndData[this.pizzeriaInfo.company_name]?.rating;
    },
  },
  methods: {
    handleCardClick() {
      this.$router.push({
        path: `/`,
        query: { pizzeriaId: this.pizzeriaId, screen: 'review' },
      });
    },
    getLogo(companyName) {
      return pizzeriasLogos[companyName];
    },
    isOpenNow() {
      const now = new Date();
      const today = now.getDay();
      const currentTime = `${now.getHours()}${now.getMinutes()}`;
      const openingHours =
        this.pizzeriaInfo['current_opening_hours']?.periods || [];
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
    isSelected(id) {
      return this.selectedPizzeria === id;
    },
  },
};
</script>

<style>
.w-15-percent {
  width: 15%;
}
</style>
