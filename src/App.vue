<template>
  <div class="main-container">
    <Sidebar />
    <MovieCard />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MovieCard from "./components/MovieCard.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    MovieCard,
  },
};
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.main-container {
  display:flex;
  font-family: Helvetica, "Roboto", sans-serif;
}
</style>
