<template>
  <div class="site-container">
    <div class="navbar">
      <div class="black-bar">
        <h1 class="title">PizzAmsterdam</h1>
      </div>
      <div class="flex justify-between flex-grow" v-if="!isMobile">
        <h3>Discover Amsterdam's best pizzerias</h3>
        <navbar />
      </div>
    </div>
    <div v-if="!isMobile" class="body">
      <pizzeria-list class="list-area" @click="console.log($event)" />
      <google-map class="map-area" />
      <review v-if="$route.query.pizzeriaId" class="review-area" />
      <welcome v-else class="review-area" />
    </div>
    <div v-else class="body body--mobile">
      <pizzeria-list
        v-if="mobileMode.screen === screens.LIST"
        is-mobile
        class="pb-14"
        @card-click="mobileMode.screen = screens.REVIEW"
      />
      <google-map
        v-if="mobileMode.screen === screens.MAP"
        class="map-area map-area--mobile"
      />
      <template v-if="mobileMode.screen === screens.REVIEW">
        <div class="flex flex-grow-0 w-full text-lg pt-2 bg-white">
          <button
            class="ml-2"
            @click="redirectToScreen(mobileMode.previousScreen)"
          >
            <v-icon aria-hidden="phone icon"> mdi-chevron-left </v-icon>
            Back
          </button>
        </div>

        <review v-if="$route.query.pizzeriaId" class="review-area" />
      </template>
      <div class="list-map-toggle" v-if="showToggle">
        <button class="rounded-l-full" @click="redirectToScreen('list')">
          List
        </button>
        <button
          class="rounded-r-full border-2 border-white"
          @click="redirectToScreen('map')"
        >
          Map
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import PizzeriaList from '~/components/pizzeria-list/pizzeria-list.vue';
import Review from '~/components/pizzeria-list/review.vue';
import Welcome from '~/components/pizzeria-list/welcome.vue';
import Navbar from '~/components/navbar.vue';

const screens = {
  MAP: 'map',
  LIST: 'list',
  REVIEW: 'review',
  WELCOME: 'welcome',
};
export default {
  components: {
    GoogleMap,
    PizzeriaList,
    Review,
    Welcome,
    Navbar,
  },
  data: function data() {
    return {
      reactiveComponent: {
        event: null,
        vssWidth: null,
        vssHeight: null,
      },
      mobileMode: {
        screen: screens.MAP,
        previousScreen: screens.LIST,
      },
    };
  },
  watch: {
    screenInQueryParam() {
      this.mobileMode.previousScreen = this.mobileMode.screen;
      this.mobileMode.screen = this.screenInQueryParam;
    },
  },
  computed: {
    $vssEvent: function $vssEvent() {
      return this.reactiveComponent.event;
    },
    $vssWidth: function $vssWidth() {
      return this.reactiveComponent.vssWidth || this.getScreenWidth();
    },
    $vssHeight: function $vssHeight() {
      return this.reactiveComponent.vssHeight || this.getScreenHeight();
    },
    isMobile() {
      return this.$vssWidth < 500;
    },
    showToggle() {
      return (
        this.isMobile &&
        [screens.MAP, screens.LIST].includes(this.mobileMode.screen)
      );
    },
    screenInQueryParam() {
      return this.$route.query.screen;
    },
  },
  created() {
    this.screens = screens;
    if (this.screenInQueryParam) {
      this.mobileMode.screen = this.screenInQueryParam;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    getScreenWidth: function getScreenWidth() {
      return (
        (typeof window === 'undefined' && 1024) ||
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      );
    },
    getScreenHeight: function getScreenHeight() {
      return (
        (typeof window === 'undefined' && 768) ||
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      );
    },
    handleResize: function handleResize(event) {
      this.reactiveComponent.event = event;
      this.reactiveComponent.vssWidth = this.getScreenWidth();
      this.reactiveComponent.vssHeight = this.getScreenHeight();
    },

    $vssDestroyListener: function $vssDestroyListener() {
      window.removeEventListener('resize', this.handleResize);
    },
    redirectToScreen(screen) {
      this.$router.push({
        path: `/`,
        query: { ...this.$route.query, screen },
      });
    },
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss">
:root {
  /* --body-height: calc(100vh - 4em); */
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
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
}
.body {
  display: flex;
  overflow-y: hidden;
  width: 100%;
  background: var(--off-white);
  border-top: 10px solid var(--theme-color);
  flex-grow: 1;
  &--mobile {
    flex-direction: column;
    align-items: center;
  }
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
.review-area {
  flex: 1 1 40%;
}
.map-area {
  flex: 1 1 30%;
  &--mobile {
    width: 100%;
  }
}
.list-area {
  flex: 0 0 25em;
  &--mobile {
    height: 100%;
  }
  /* height: var(--body-height); */
}
.list-map-toggle {
  position: fixed;
  bottom: 0.75rem;
  display: flex;
}
.list-map-toggle button {
  @apply text-lg bg-black text-white;
  width: 5rem;
  padding: 4px 0;
}
</style>
