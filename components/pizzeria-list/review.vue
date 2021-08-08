<template>
  <div class="review bg-white" v-if="pizzeriaId">
    <h1 class="mb-4">{{ name }}</h1>
    <div class="h-64 flex justify-center mb-3">
      <carousel :images="photos" />
    </div>
    <h5 class="mb-4 font-semibold">{{ rating }}</h5>
    <p class="mb-4">
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
        <v-icon medium class="arrow">
          {{ showBusinessDetails ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon
        >
      </button>
      <h4>Business details</h4>
    </div>
    <div class="business-details-style" v-if="showBusinessDetails">
      <div class="w-half">
        <h5>contact details</h5>
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
        <h5>Opening hours</h5>
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
import pizzeriasReviewsAndData from '@/assets/pizzeriasReviewsAndData.json';
import pizzeriasDetails from '@/assets/pizzeriasDetails';
import Carousel from '../carousel';
export default {
  components: { Carousel },
  data() {
    return {
      showBusinessDetails: true,
      photos: [
        {
          src:
            'https://d1ralsognjng37.cloudfront.net/a70b18de-1b3d-4345-9f4f-75e38730c837.jpeg',
          alt: 'pizza photo',
        },
        {
          src:
            'https://www.yourlittleblackbook.me/wp-content/uploads/2019/03/nnea-amsterdam-2.jpg',
          alt: 'pizza photo',
        },
        {
          src:
            'https://media-cdn.tripadvisor.com/media/photo-s/0b/10/86/62/photo1jpg.jpg',
          alt: 'pizza photo',
        },
      ],
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
      return this.pizzeriaInfo.company_name;
    },

    localizedPhoneNumber() {
      return this.pizzeriaInfo.formatted_phone_number;
    },
    weekdayText() {
      return this.pizzeriaInfo.opening_hours.weekday_text;
    },
    rating() {
      return pizzeriasReviewsAndData[this.pizzeriaInfo.company_name].rating;
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
  height: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--theme-color);
  border-radius: 5px 5px 0 0;
  padding: 0.2em;
  flex-grow: 0;
  flex-shrink: 0;
  color: white;
}
.business-details-style {
  border-width: 0 1px 1px 1px;
  border-color: var(--theme-color);
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1em;

  border-radius: 0 0 5px 5px;
}
.w-half {
  width: 50%;
}
.delivery-options {
  width: 100%;
  max-width: 30rem;
  padding-bottom: 30px;
}
.arrow {
  color: white !important;
}
.my-caroussel {
  display: flex;
  flex-direction: row;
  flex: 1 0 300px;

  flex-wrap: nowrap;
  overflow: scroll;
  width: 90%;
}
.photo-review {
  height: 300px;
}
.carousel-style {
  height: 300px;
}
.slide-style {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
