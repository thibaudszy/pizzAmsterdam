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
    <div class="body">
      <pizzeria-list class="list-area" />
      <GoogleMap class="map-area" />
      <review class="review-area" />
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import PizzeriaList from '~/components/pizzeria-list/pizzeria-list.vue';
import Review from '~/components/pizzeria-list/review.vue';

export default {
  components: {
    GoogleMap,
    PizzeriaList,
    Review,
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
:root {
  --body-height: 80vh;
}
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
}
.body {
  display: flex;
  width: 90vw;
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
  height: var(--body-height);
}
.review-area {
  margin-left: 1em;
  height: var(--body-height);
  flex: 3 1 auto;
  border-left: 2px solid grey;
}
.map-area {
  flex: 2 1 auto;
}
.list-area {
  flex: 1 1 2000px;
}
</style>
