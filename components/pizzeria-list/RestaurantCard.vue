<template>
  <button
    v-if="pizzeriaInfo"
    :class="`${cardClass} card-class-general bg-white`"
    @click="handleCardClick"
  >
    <div class="card-class-info">
      <p class="text-lg">{{ pizzeriaInfo.name }}</p>
      <span :class="isOpenNow() ? 'green-dot' : 'red-dot'"> </span>
      <span class="font-semibold mb-2">
        {{ isOpenNow() ? 'open now' : 'closed' }}
      </span>
      <p class="mb-2">{{ rating }}</p>
    </div>
    <div class="card-class-image">
      <img
        src="https://static.wixstatic.com/media/469b5b_09db8679481747879a03d9c18b535328%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/469b5b_09db8679481747879a03d9c18b535328%7Emv2.png"
        style="border-radius: 50%; background: black"
      />
    </div>
  </button>
</template>

<script>
import { framework } from 'vuetify';
import pizzeriasDetails from '@/assets/pizzeriasDetails';
import pizzeriasReviewsAndData from '@/assets/pizzeriasReviewsAndData.json';
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
        ? 'selected-pizzeria-style'
        : '';
    },
    rating() {
      return pizzeriasReviewsAndData[this.pizzeriaInfo.company_name].rating;
    },
  },
  methods: {
    handleCardClick() {
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
  padding: 0.5em;
  background-color: var(--off-white);
  text-align: left;
  /* cursor: pointer; */
}
.card-class-image {
  width: 15%;
  border-radius: 50%;
}
.card-class-info {
  width: 80%;
}
.selected-pizzeria-style {
  background-color: white;
}
</style>
