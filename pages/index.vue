<template>
  <div class="site-container">
    <div class="navbar">
      <div class="black-bar">
        <h1 class="title">PizzAmsterdam</h1>
      </div>
      <div class="flex justify-between flex-grow">
        <h3>Discover Amsterdam's best pizzerias</h3>
        <navbar />
      </div>
    </div>
    <div class="body">
      <pizzeria-list class="list-area" />
      <google-map class="map-area" />
      <review v-if="$route.query.pizzeriaId" class="review-area" />
    </div>
    <div class="footer">
      <p>work with us</p>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import PizzeriaList from '~/components/pizzeria-list/pizzeria-list.vue';
import Review from '~/components/pizzeria-list/review.vue';
import Welcome from '~/components/pizzeria-list/welcome.vue';
import Navbar from '~/components/navbar.vue';

export default {
  components: {
    GoogleMap,
    PizzeriaList,
    Review,
    Welcome,
    Navbar,
  },
};
</script>

<style>
:root {
  --body-height: 85vh;
  --off-white: #f4f7f6;
  /* --theme-color: rgb(186, 45, 11); */
  --theme-color: black;
  --base-font-size: 1rem;
}
p {
  font-size: var(--base-font-size);
}
h6 {
  font-size: calc(var(--base-font-size) * 1.1);
}
h5 {
  font-size: calc(var(--base-font-size) * 1.2);
}
h4 {
  font-size: calc(var(--base-font-size) * 1.4);
}
h3 {
  font-size: calc(var(--base-font-size) * 1.6);
}
h2 {
  font-size: calc(var(--base-font-size) * 1.8);
}
h1 {
  font-size: calc(var(--base-font-size) * 2);
}

.site-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
}
.body {
  display: flex;
  width: 100vw;
  background: var(--off-white);
  border: 10px solid var(--theme-color);
  flex-grow: 2;
}
.navbar {
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 25px;
  height: 4rem;
  border-bottom: 10px solid var(--theme-color);
}

.title {
  display: block;
  font-weight: 400;
  width: 100%;
  letter-spacing: 1px;
  color: white;
  padding-left: 0.5em;
}
.black-bar {
  position: relative;
  background: var(--theme-color);
  display: inline-block;
  width: fit-content;

  padding: 0 2vw 0 0;
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.black-bar::after {
  position: absolute;
  z-index: -1;
  content: '';
  right: -10%;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: inherit;
  -webkit-transform: skewX(-10deg);
  -moz-transform: skewX(-10deg);
  -ms-transform: skewX(-10deg);
  transform: skewX(-10deg);
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
  flex: 1 1 40%;
}
.map-area {
  flex: 1 1 30%;
}
.list-area {
  flex: 0 0 25em;
  height: var(--body-height);
}
.footer {
  background-color: rgb(83, 83, 83);
  height: 100px;
  width: 100vw;
  padding: 10px;
  color: white;
}
</style>
