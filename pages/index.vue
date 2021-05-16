<template>
  <div class="container">
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
    <div class="flex">
      <pizzeria-list />
      <GoogleMap />
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import PizzeriaList from '~/components/pizzeria-list/pizzeria-list.vue';

export default {
  components: {
    GoogleMap,
    PizzeriaList,
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
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
.height-80vh {
  height: 80vh;
}
</style>
