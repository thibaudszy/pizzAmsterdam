<template>
  <v-card>
    <v-card-title> {{ selectedPizzeria.name }} </v-card-title>
    <v-card-subtitle class="text-left">
      {{ isOpenNow() ? 'open now' : 'closed' }}</v-card-subtitle
    >
    <v-card-text>
      An awesome review. Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
      ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </v-card-text>
    <v-card-actions> full review </v-card-actions>
  </v-card>
</template>

<script>
import { framework } from 'vuetify'
import pizzeriasDetails from '@/assets/pizzeriasDetails'
export default {
  name: 'RestaurantCard',
  components: { ...framework },

  computed: {
    selectedPizzeria() {
      const { pizzeriaId } = this.$route.query
      return pizzeriaId ? pizzeriasDetails[pizzeriaId] : 'none selected'
    },
  },
  methods: {
    isOpenNow() {
      const now = new Date()
      const today = now.getDay()
      const currentTime = `${now.getHours()}${now.getMinutes()}`
      const openingHours = this.selectedPizzeria['opening_hours'].periods
      const daysOpen = openingHours.map(({ open }) => open.day)
      if (!daysOpen.includes(today)) {
        return false
      }
      if (
        currentTime < openingHours[today].open.time ||
        currentTime >= openingHours[today].close.time
      ) {
        return false
      }
      return true
    },
  },
}
</script>

<style></style>
