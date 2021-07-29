<template>
  <div class="filter-box">
    <p>Movie</p>
    <div>
      <p>Filter by Genres</p>
    </div>
    <div>adsad</div>
    <div>
      <p>Filter by Rate</p>
    </div>
    <div v-for="movieVote in findMoviesVote" :key="movieVote">
      <input type="checkbox" id="scales" name="scales" />
      <label for="`${movieVote}`">{{ movieVote }}</label>
    </div>
    <div>
      <p>Filter by Languages</p>
    </div>
    <div v-for="movieLanguage in findMovieLanguages" :key="movieLanguage">
      <input type="checkbox" id="`${movieLanguage}`" name="scales" />
      <label for="`${movieVote}`">{{ movieLanguage }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    movieList: Object,
  },
  computed: {
    // TODO when I click the title, title should expand
    findMoviesVote() {
      return this.movieList.map((movie) => movie.vote_average);
    },
    findMovieLanguages() {
      const languages = this.movieList.map((movie) => movie.original_language);
      return new Set(languages);
    },
  },
};
</script>

<style scoped lang="scss">
.filter-box {
  background-color: white;
  padding: 10px 20px;
}
</style>