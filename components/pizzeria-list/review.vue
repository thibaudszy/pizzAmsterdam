<template>
  <div class="review" v-if="pizzeriaId">
    <h1 class="text-lg mb-4">{{ name }}</h1>
    <img class="mb-4" src="@/assets/images/nNea_Pizza/images.jpeg" />
    <p class="mb-4">our rating: 4 *</p>
    <p>
      An awesome review. Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
      ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. An awesome review. Sed ut perspiciatis unde omnis
      iste natus error sit voluptatem accusantium doloremque laudantium, totam
      rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
      architecto beatae vitae dicta sunt explicabo.
    </p>
    <div class="business-details-bar">
      <button
        aria-label="press to view the business details"
        @click="toggleShowBusinessDetails"
      >
        <v-icon medium class="mr-10">
          {{ showBusinessDetails ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon
        >
      </button>
      <h2>Business details</h2>
    </div>
    <div class="flex justify-around w-full my-4" v-if="showBusinessDetails">
      <div class="w-half">
        <p>contact details</p>
        <p>
          <v-icon small aria-hidden="phone icon"> mdi-phone </v-icon>
          {{ localizedPhoneNumber }}
        </p>
        <p>
          <v-icon small aria-hidden="phone icon"> mdi-open-in-new</v-icon>
          <a :href="pizzeriaInfo.website"> Website</a>
        </p>
        <p>
          <v-icon small aria-hidden="address"> mdi-map-marker</v-icon>
          {{ pizzeriaInfo.formatted_address }}
        </p>
      </div>

      <div class="w-half">
        <p>Opening hours</p>
        <p v-for="(day, index) in weekdayText" :key="index">{{ day }}</p>
      </div>
    </div>
    <div class="flex justify-around items-center mt-4 delivery-options">
      <p>Order on:</p>
      <button
        class="border-2 border-solid border-black text-green-500 rounded p-2"
      >
        uber eats
      </button>
      <button
        class="border-2 border-solid border-black text-blue-500 rounded p-2"
      >
        Deliveroo
      </button>
    </div>
  </div>
</template>

<script>
import pizzeriaCompanies from '@/assets/pizzeriaCompanies.json';
import pizzeriasDetails from '@/assets/pizzeriasDetails';

export default {
  data() {
    return {
      showBusinessDetails: true,
    };
  },

  computed: {
    pizzeriaId() {
      return this.$route.query.pizzeriaId;
    },
    pizzeriaInfo() {
      return pizzeriasDetails[this.pizzeriaId];
    },
    name() {
      return pizzeriaCompanies[this.pizzeriaId];
    },

    localizedPhoneNumber() {
      if (!this.pizzeriaInfo) return;
      const phoneNumberAsArray = this.pizzeriaInfo.international_phone_number.split(
        ' '
      );
      if (phoneNumberAsArray[0] === '+31') {
        phoneNumberAsArray.shift();
        phoneNumberAsArray[0] = '0' + phoneNumberAsArray[0];
      }
      return phoneNumberAsArray.join(' ');
    },
    weekdayText() {
      return this.pizzeriaInfo.opening_hours.weekday_text;
    },
  },
  methods: {
    toggleShowBusinessDetails() {
      this.showBusinessDetails = !this.showBusinessDetails;
    },
  },
};
</script>

<style>
.review {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: auto;
  padding: 20px;
}
.business-details-bar {
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0 10px 0;
  background-color: lightgray;
}
.w-half {
  width: 50%;
}
.delivery-options {
  width: 100%;
  max-width: 30rem;
  margin-bottom: 20px;
}
</style>
