<template>
  <div class="filter-box">
    <div>
      <button @click="isGenresExpanded()" class="filter-title">
        + Filter by Genres
      </button>
    </div>
    <div v-if="genresExpanded">
      <div class="filter-result">test</div>
    </div>
    <div>
      <button @click="isRateExpanded()" class="filter-title">
        + Filter by Rate
      </button>
    </div>
    <div v-if="rateExpanded">
      <div
        v-for="movieVote in findMoviesVote"
        :key="movieVote"
        class="filter-result"
      >
        <input type="checkbox" id="rate" name="rate" />
        <label for="`${movieVote}`">{{ movieVote }}</label>
      </div>
    </div>
    <div>
      <button @click="isLanguageExpanded()" class="filter-title">
        + Filter by Languages
      </button>
    </div>
    <div v-if="languageExpanded">
      <div
        v-for="movieLanguage in findMovieLanguages"
        :key="movieLanguage"
        class="filter-result"
      >
        <input type="checkbox" id="`${movieLanguage}`" name="language" />
        <label for="`${movieVote}`">{{ movieLanguage }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  name: "FilterBox",
  props: {
    movieList: Object,
  },
  setup(props) {
    const pelin = reactive({
      genresExpanded: false,
      rateExpanded: false,
      languageExpanded: false,
      findMoviesVote: computed(() => {
        return props.movieList.map((movie) => movie.vote_average);
      }),
      findMovieLanguages: computed(() => {
        const languages = props.movieList.map(
          (movie) => movie.original_language
        );
        return new Set(languages);
      }),
    });

    function isGenresExpanded() {
      pelin.genresExpanded = !pelin.genresExpanded;
      // return pelin.genresExpanded;
    }

    function isRateExpanded() {
      pelin.rateExpanded = !pelin.rateExpanded;
      // return pelin.rateExpanded;
    }

    function isLanguageExpanded() {
      pelin.languageExpanded = !pelin.languageExpanded;
      // return pelin.languageExpanded;
    }
    return {
      ...toRefs(pelin),
      isGenresExpanded,
      isRateExpanded,
      isLanguageExpanded,
    };
  },
};
</script>

<style scoped lang="scss">
.filter-box {
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;

  .filter-title {
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    color:#37d9ac
  }

  .filter-result {
    margin: 10px;
    font-size: 16px;
  }

  label {
    margin-left: 5px;
  }
}
</style>
