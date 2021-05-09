<template>
  <div class="container">
    <div class="min-w-full">
      <h1 class="title">Amsterdam's best pizza</h1>
      <div class="links mb-8">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          List view
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Map view
        </a>
      </div>
      <restaurant-card />
      <GoogleMap />
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
export default {
  components: {
    GoogleMap,
    RestaurantCard,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 50em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
