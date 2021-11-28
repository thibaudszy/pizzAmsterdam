<template>
  <div class="welcome-style p-5">
    <h1>Welcome to pizzAmsterdam</h1>
    <h2>
      This is a compilation of the best pizzerias in Amsterdam. The map will
      help you quickly identify which of the best pizzerias of Amsterdam are
      next to you.
    </h2>
    <p>
      Click on a marker or a card in the sidebar to see our review of a pizzeria
    </p>
    <!-- <NuxtLink to="/">
      Don't mind the location? Check out our 5 favourite pizzerias
    </NuxtLink> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome-style {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
</style>
