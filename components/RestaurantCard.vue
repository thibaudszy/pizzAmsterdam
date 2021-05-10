<template>
  <v-card elevation="2">
    <v-card-title> {{ selectedPizzeria }} </v-card-title>
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
      return pizzeriaId ? pizzeriasDetails[pizzeriaId].name : 'none selected'
    },
  },
  mounted() {},
}
</script>

<style></style>
