<template>
  <div class="navbar-links">
    <!-- <h4>
      <nuxt-link to="/" class="link"> Our favourites </nuxt-link>
    </h4>
    <h4>
      <nuxt-link to="/" class="link"> About us </nuxt-link>
    </h4> -->

    <h4>
      <nuxt-link to="/" class="link"> <v-icon> mdi-home </v-icon> </nuxt-link>
    </h4>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar-links {
  display: flex;
  align-items: center;
}
.link {
  margin-right: 2em;
}
</style>
