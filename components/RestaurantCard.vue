<template>
  <div elevation="2">
    <h2>{{ selectedPizzeria.name }}</h2>
    <h5 class="text-left">
      {{ isOpenNow() ? 'open now' : 'closed' }}
    </h5>
    <p>
      An awesome review. Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
      ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </p>
    <a> full review </a>
  </div>
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
