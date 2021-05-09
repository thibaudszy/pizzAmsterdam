<template>
  <div class="rounded mb-5 p-2 border-2 shadow">
    <h2>{{ selectedPizzeria }}</h2>
    <p>address</p>
    <p>phone number</p>
    <p>x minutes away from you</p>
  </div>
</template>

<script>
import { GOOGLE_MAPS_API_KEY } from '@/assets/secrets'
import axios from 'axios'
export default {
  name: 'RestaurantCard',
  computed: {
    selectedPizzeria() {
      return this.$route.query?.pizzeria || 'none selected'
    },
  },
  mounted() {},
}
</script>

<style></style>
